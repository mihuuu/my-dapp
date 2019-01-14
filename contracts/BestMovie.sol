pragma solidity ^0.5.0;

contract BestMovie {
    // Model a Candidate
    struct Movie {
        uint id;
        string name;
        uint starCount;
    }

    struct User {
        uint starNum;
        bool hasStared;
    }

    // Store accounts that have voted
    mapping(address => User) public users;

    // Store Candidates
    // Fetch Candidate
    mapping(uint => Movie) public movies;
    // Store Candidates Count
    uint public moviesCount;

    // voted event
    event starEvent (
        uint indexed _movieId
    );

    //constructor
    constructor() public {
        addMovie("Movie 1");
        addMovie("Movie 2");
        addMovie("Movie 3");
        addMovie("Movie 4");
        addMovie("Movie 5");
        addMovie("Movie 6");

        users[msg.sender].starNum = 2;
    }

    function addMovie (string memory _name) private {
        moviesCount ++;
        movies[moviesCount] = Movie(moviesCount, _name, 0);
    }

    function star (uint _movieId) public {
        // require that they haven't voted before
        require(users[msg.sender].starNum > 0, "you have no stars left!");

        // require a valid candidate
        require(_movieId > 0 && _movieId <= moviesCount, "movieID out of range");

        // record that voter has voted
        // voters[msg.sender] = true;
        users[msg.sender].starNum -= 1;

        // update candidate vote Count
        movies[_movieId].starCount ++;

        // trigger voted event
        emit starEvent(_movieId);
    }
}
