package com.cognizant.serviceportal.controller;
import com.cognizant.serviceportal.exception.ResourceNotFoundException;
import com.cognizant.serviceportal.model.User;

import com.cognizant.serviceportal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v2/")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    //get all requests
    @GetMapping("/users")
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    // create employee
    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }


    //Update User Details

    @PutMapping("UpdateUser/{email}")
    public ResponseEntity<User> updateUserDetails(@PathVariable String email, @RequestBody User userDetails) throws ResourceNotFoundException {

        // find the service request by ID
        User updatedUser = userRepository.findById(email).orElseThrow(() -> new ResourceNotFoundException("Service Request not found for this email :: " + email));
        // update the service request with new details
        updatedUser.setFirstname(userDetails.getFirstname());
        updatedUser.setLastname(userDetails.getLastname());
        updatedUser.setEmail(userDetails.getEmail());
        updatedUser.setPhone(userDetails.getPhone());
        updatedUser.setPwd(userDetails.getPwd());
        // save the updated service request to the database
         userRepository.save(updatedUser);
        return ResponseEntity.ok(updatedUser);

    }

    @GetMapping("user/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable(value = "email") String email) throws ResourceNotFoundException {
        User user = userRepository.findById(email).orElseThrow(() -> new ResourceNotFoundException("User not found for this email :: " + email));
        return ResponseEntity.ok().body(user);}















//    @PutMapping("UpdateUser/{user_id}")
//    public ResponseEntity<User> updateServiceRequest(@PathVariable(value = "user_id") int user_id, @RequestBody User userDetails) throws ResourceNotFoundException {
//        // find the service request by ID
//        User user = userRepository.findById(user_id).orElseThrow(() -> new ResourceNotFoundException("Service Request not found for this id :: " + user_id));
//        // update the service request with new details
//        userDetails.setUser_id(userDetails.getUser_id());
//        userDetails.setFirstname(userDetails.getFirstname());
//        userDetails.setLastname(userDetails.getLastname());
//        userDetails.setEmail(userDetails.getEmail());
//        userDetails.setPhone(userDetails.getPhone());
//        userDetails.setPwd(userDetails.getPwd());
//        // save the updated service request to the database
//        final User updatedUser = userRepository.save(user);
//        return ResponseEntity.ok(updatedUser);
//    }
}