package com.zaksim.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.zaksim.model.*;

import io.swagger.annotations.ApiOperation;

//http://localhost:8000/swagger-ui.html
@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/file")
public class FileController {

    private static String UPLOADED_FOLDER = "/home/ubuntu/apps/zaksim_back/src/main/resources/images/";
	@PostMapping("/upload")
    public String file(@RequestParam("file") MultipartFile file){
 
        if (file.isEmpty()) {
                         return "file is empty";
        }
 
 
        File path = new File(UPLOADED_FOLDER + file.getOriginalFilename());
        try{
            byte[] fileSize = file.getBytes();
            file.transferTo(path);
            return UPLOADED_FOLDER+file.getOriginalFilename();
        }catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
       return "Upload failed";
    }
}
