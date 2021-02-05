package com.zaksim.model;

import io.swagger.annotations.ApiModelProperty;

public class BasicResponse {
	@ApiModelProperty(value = "data", position = 1)
    public String data;
    @ApiModelProperty(value = "message", position = 2)
    public String message;
    @ApiModelProperty(value = "object", position = 3)
    public Object object;
}
