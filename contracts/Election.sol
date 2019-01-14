pragma solidity ^0.5.0;

contract Election {
    // Model a Candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    struct Voter {
        uint voteNum;
        bool hasVoted;
    }

    // Store accounts that have voted
    mapping(address => Voter) public voters;

    // Store Candidates
    // Fetch Candidate
    mapping(uint => Candidate) public candidates;
    // Store Candidates Count
    uint public candidatesCount;

    // voted event
    event votedEvent (
        uint indexed _candidateId
    );

    //constructor
    constructor() public {
        addCandidate("Movie 1");
        addCandidate("Movie 2");
        addCandidate("Movie 3");
        addCandidate("Movie 4");
        addCandidate("Movie 5");
        addCandidate("Movie 6");

        voters[msg.sender].voteNum = 3;
    }

    function addCandidate (string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function vote (uint _candidateId) public {
        // require that they haven't voted before
        require(voters[msg.sender].voteNum > 0, "you have no votes left!");

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount, "candidateID out of range");

        // record that voter has voted
        // voters[msg.sender] = true;
        voters[msg.sender].voteNum -= 1;

        // update candidate vote Count
        candidates[_candidateId].voteCount ++;

        // trigger voted event
        emit votedEvent(_candidateId);
    }
}
