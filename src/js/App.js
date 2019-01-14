import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'
import BestMovie from '../../build/contracts/BestMovie.json'
import Content from './Content'
import 'bootstrap/dist/css/bootstrap.css';

const wrapper = {
  margin: '0 auto',
  marginBottom: 20,
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      movies: [],
      hasStared: false,
      starNum: 0,
      loading: true,
      staring: false,
    }

    if (typeof web3 != 'undefined') {
      this.web3Provider = web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }

    this.web3 = new Web3(this.web3Provider)

    this.bestMovie = TruffleContract(BestMovie)
    this.bestMovie.setProvider(this.web3Provider)

    this.castStar = this.castStar.bind(this)
    this.watchEvents = this.watchEvents.bind(this)
  }

  componentDidMount() {
    // TODO: Refactor with promise chain
    this.web3.eth.getCoinbase((err, account) => {
      this.setState({ account })
      this.bestMovie.deployed().then((starInstance) => {
        this.starInstance = starInstance;
        this.watchEvents();

        this.starInstance.moviesCount().then((moviesCount) => {
          for (var i = 1; i <= moviesCount; i++) {
            this.starInstance.movies(i).then((movie) => {
              const movies = [...this.state.movies];
              movies.push({
                id: movie[0],
                name: movie[1],
                starCount: movie[2]
              });
              this.setState({ movies: movies })
            });
          }
        })

        this.starInstance.users(this.state.account).then((user) => {
          const starNum = user[0].toNumber();
          this.setState({ 
            hasStared: false,
            loading: false,
            starNum: starNum,
           })
        })
      })
    })

    //console.log("[1] starNum: " + this.state.starNum);

  }

  watchEvents() {
    // TODO: trigger event when vote is counted, not when component renders
    this.starInstance.starEvent({}, {
      fromBlock: 0,
      toBlock: 'latest'
    }).watch((error, event) => {
      this.setState({ 
        staring: false,
      })
    })
  }

  castStar(movieId) {
    this.setState({ staring: true })
    this.starInstance.star(movieId, { from: this.state.account }).then((result) => {
      this.setState({ starNum: this.state.starNum - 1 });

      if(this.state.starNum <= 0)
        this.setState({ hasStared: true })
    });
  }

  render() {
    return (
      <div style={wrapper}>
        <div >
        <div className='text-center' >
          <img src="../images/header.png" style={{width:'50%', margin:'0 auto'}}alt="header"/>
          <br/>
          { this.state.loading || this.state.staring
            ? <p className='text-center'>Loading...</p>
            : <Content
                account={this.state.account}
                movies={this.state.movies}
                hasStared={this.state.hasStared}
                castStar={this.castStar} 
                starNum={this.state.starNum} />
          }
        </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
   <App />,
   document.querySelector('#root')
)
