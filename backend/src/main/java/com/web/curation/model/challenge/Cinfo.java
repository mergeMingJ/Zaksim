package com.web.curation.model.challenge;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Cinfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cinfo_id")
    private Integer cinfoId;

    @Column(name = "challenge_id")
    private Integer challengeId;
    private String guide;
    @Column(name = "due_time")
    private String dueTime;
    @Column(name = "member_condition")
    private String memberCondition;
    @Column(name = "entry_point")
    private Integer entryPoint;
    @Column(name = "desc_info")
    private String descInfo;
    @Column(name = "desc_rec")
    private String descRec;
    @Column(name = "desc_expert")
    private String descExpert;
    @Column(name = "desc_warn")
    private String descWarn;
}
