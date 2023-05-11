// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ParkingContract {
    struct ParkingSlot {
        uint256 id;
        string dimensions;
        bool isAvailable;
    }

    address public owner;
    mapping(uint256 => ParkingSlot) public parkingSlots;
    uint256 public numParkingSlots;

    event ParkingSlotRegistered(uint256 indexed id, string dimensions);
    event ParkingSlotAvailabilityUpdated(uint256 indexed id, bool isAvailable);
    event ReservationMade(uint256 indexed id, address indexed user);
    event ReservationCancelled(uint256 indexed id, address indexed user);

    constructor() {
        owner = msg.sender;
        numParkingSlots = 0;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can perform this action");
        _;
    }

    function registerParkingSlot(string memory _dimensions) external onlyOwner {
        numParkingSlots++;
        parkingSlots[numParkingSlots] = ParkingSlot(numParkingSlots, _dimensions, true);
        emit ParkingSlotRegistered(numParkingSlots, _dimensions);
    }

    function updateParkingSlotAvailability(uint256 _id, bool _isAvailable) external onlyOwner {
        require(_id <= numParkingSlots, "Invalid parking slot ID");
        parkingSlots[_id].isAvailable = _isAvailable;
        emit ParkingSlotAvailabilityUpdated(_id, _isAvailable);
    }

    function makeReservation(uint256 _id) external payable {
        require(_id <= numParkingSlots, "Invalid parking slot ID");
        require(parkingSlots[_id].isAvailable, "Parking slot is not available");
        
        // Perform any additional reservation logic here, e.g., check if user has already made a reservation
        
        parkingSlots[_id].isAvailable = false;
        emit ReservationMade(_id, msg.sender);
    }

    function cancelReservation(uint256 _id) external {
        require(_id <= numParkingSlots, "Invalid parking slot ID");
        require(!parkingSlots[_id].isAvailable, "Parking slot is already available");
        
        // Perform any additional cancellation logic here, e.g., check if reservation belongs to the user
        
        parkingSlots[_id].isAvailable = true;
        emit ReservationCancelled(_id, msg.sender);
    }
}
