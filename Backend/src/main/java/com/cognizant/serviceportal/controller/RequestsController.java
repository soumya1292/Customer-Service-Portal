package com.cognizant.serviceportal.controller;

import com.cognizant.serviceportal.exception.ResourceNotFoundException;
import com.cognizant.serviceportal.model.ServiceRequest;
import com.cognizant.serviceportal.repository.ServiceRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")


public class RequestsController {

    @Autowired
    private ServiceRequestRepository requestsRepository;

    //get all requests
    @GetMapping("/AllRequests")
    public List<ServiceRequest> getAllRequests(){
        return requestsRepository.findAll();
    }

    @GetMapping("/PendingRequests")
    public List<ServiceRequest> getAllPendingServiceRequests() {

        return requestsRepository.findBystatus("Pending");
    }

    @GetMapping("/CompletedRequests")
    public List<ServiceRequest> getAllCompletedServiceRequests(){
       return requestsRepository.findBystatus("Completed");
    }

    @GetMapping("RequestById/{id}")
    public ResponseEntity<ServiceRequest> getServiceRequestById(@PathVariable(value = "id") int id) throws ResourceNotFoundException {
        ServiceRequest serviceRequest = requestsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Service Request not found for this id :: " + id));
        return ResponseEntity.ok().body(serviceRequest);
    }

    @PostMapping("/NewRequest")
    public ServiceRequest createServiceRequest(@RequestBody ServiceRequest serviceRequest){
        return requestsRepository.save(serviceRequest);
    }


    @DeleteMapping("/DeleteRequest/{id}")
    public ResponseEntity<?> deleteServiceRequest(@PathVariable (value="id")int id) throws ResourceNotFoundException{
        ServiceRequest serviceRequest = requestsRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Service Request not found for the id"+id));
        requestsRepository.delete(serviceRequest);
        return ResponseEntity.ok().build();
    }



     //create requests
    @PutMapping("/CloseRequest/{user_id}")
    public ServiceRequest updateRequestStatus(@PathVariable(value = "user_id") int user_id) {
        ServiceRequest request = requestsRepository.findById(user_id).orElseThrow(() -> new ResourceNotFoundException("user_id"));
        request.setStatus("Completed");
        ServiceRequest updatedRequest = requestsRepository.save(request);
        return updatedRequest;
    }

    @PutMapping("/EditRequest/{id}")
    public ResponseEntity<ServiceRequest> editServiceRequest(@PathVariable (value="id")int id, @RequestBody ServiceRequest requestDetails) throws ResourceNotFoundException {
        ServiceRequest request = requestsRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Service Request not found for the id"+id));

        request.setServiceId(requestDetails.getServiceId());
        request.setServiceName(requestDetails.getServiceName());
        request.setDescription(requestDetails.getDescription());
        request.setType(requestDetails.getType());
        request.setStatus(requestDetails.getStatus());
        request.setComplete_by(requestDetails.getComplete_by());
        ServiceRequest updatedRequest = requestsRepository.save(request);
        return ResponseEntity.ok().body(updatedRequest);
    }


}
