package com.skn.user.file.controller;

import com.skn.user.config.annotation.Operation;
import com.skn.user.config.api.apidto.APIDataResponse;
import com.skn.user.config.api.exception.GeneralException;
import com.skn.user.file.dto.FileInfo;
import com.skn.user.file.dto.FileInit;
import com.skn.user.file.service.FileInfoService;
import com.skn.user.util.NTUtil;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/api/v1/file")
public class FileApiController {

    private final FileInfoService fileInfoService;
    @Operation("파일등록")
    @PostMapping("/file-upload")
    public @ResponseBody APIDataResponse<String> createFile(
            @RequestParam("files") MultipartFile[] files,
            @ModelAttribute FileInit fileInit
    ) throws IOException {

        try {
            List<MultipartFile> multipartFiles = Arrays.asList(files);


            if (multipartFiles.size() == 1) {
                MultipartFile file = multipartFiles.get(0);

                if(log.isDebugEnabled()){
                    log.debug("------------- file start -------------");
                    log.debug("name : "+file.getName());
                    log.debug("filename : "+file.getOriginalFilename());
                    log.debug("size : "+file.getSize());
                    log.debug("-------------- file end --------------\n");
                }

                FileInfo fileInfo = fileInfoService.createFileInfo(fileInit, file, 0);
                fileInfoService.saveFile(file, fileInfo);
            } else {
                List<CompletableFuture<Void>> futures = multipartFiles.stream()
                        .map(file -> CompletableFuture.runAsync(() -> {
                            if(log.isDebugEnabled()){
                                log.debug("------------- file start -------------");
                                log.debug("name : "+file.getName());
                                log.debug("filename : "+file.getOriginalFilename());
                                log.debug("size : "+file.getSize());
                                log.debug("-------------- file end --------------\n");
                            }

                            int index = multipartFiles.indexOf(file);
                            FileInfo fileInfo = fileInfoService.createFileInfo(fileInit, file, index);
                            fileInfoService.saveFile(file, fileInfo);
                        }))
                        .collect(Collectors.toList());

                futures.forEach(CompletableFuture::join);
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new GeneralException(e);
        }

        return APIDataResponse.of(Boolean.toString(true));
    }


    @Operation("파일 수정")
    @PutMapping("/file-update")
    public @ResponseBody APIDataResponse<String> updateFile(
            @RequestParam("files") MultipartFile[] files,
            @ModelAttribute FileInit fileInit
    ) throws IOException {

        try {
            List<MultipartFile> multipartFiles = Arrays.asList(files);

            // 삭제할 거 있으면 삭제
            if (!NTUtil.isNull(fileInit.getUid()).equals("")) {
                fileInfoService.checkDeleteFIle(fileInit);
            }

            // 생성
            if (multipartFiles.size() == 1) {
                MultipartFile file = multipartFiles.get(0);

                if(log.isDebugEnabled()){
                    log.debug("------------- file start -------------");
                    log.debug("name : "+file.getName());
                    log.debug("filename : "+file.getOriginalFilename());
                    log.debug("size : "+file.getSize());
                    log.debug("-------------- file end --------------\n");
                }

                FileInfo fileInfo = fileInfoService.createFileInfo(fileInit, file, 0);
                fileInfoService.saveFile(file, fileInfo);
            } else {
                List<CompletableFuture<Void>> futures = multipartFiles.stream()
                        .map(file -> CompletableFuture.runAsync(() -> {
                            if(log.isDebugEnabled()){
                                log.debug("------------- file start -------------");
                                log.debug("name : "+file.getName());
                                log.debug("filename : "+file.getOriginalFilename());
                                log.debug("size : "+file.getSize());
                                log.debug("-------------- file end --------------\n");
                            }

                            int index = multipartFiles.indexOf(file);
                            FileInfo fileInfo = fileInfoService.createFileInfo(fileInit, file, index);
                            fileInfoService.saveFile(file, fileInfo);
                        }))
                        .collect(Collectors.toList());

                futures.forEach(CompletableFuture::join);
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new GeneralException(e);
        }

        return APIDataResponse.of(Boolean.toString(true));
    }


    @Operation("파일 삭제")
    @DeleteMapping("/file-delete/{uid}")
    public APIDataResponse<String> deleteFile(
            @PathVariable String uid
    ) throws IOException {
        if (!NTUtil.isNull(uid).equals("")) {
            fileInfoService.deleteFileApi(uid, "delete");
        }
        return APIDataResponse.of(Boolean.toString(true));
    }

    @Operation("파일 대량 삭제")
    @DeleteMapping("/multi-file-delete")
    public @ResponseBody APIDataResponse<String> deleteMultiFile(
            @ModelAttribute FileInit fileInit
    ) throws IOException {


        fileInfoService.checkDeleteFIle(fileInit);
        return APIDataResponse.of(Boolean.toString(true));
    }
}
