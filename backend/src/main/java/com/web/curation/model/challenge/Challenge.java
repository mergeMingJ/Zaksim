package com.web.curation.model.challenge;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Challenge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "challenge_id")
    private int challengeId;

    private String title;
    private String mission;
    private String summary;
    @Column(name = "manager_id")
    private Integer managerId;
    @Column(name = "manager_nickname")
    private String managerNickname;
    @Column(name = "is_public", columnDefinition = "TINYINT")
    private Integer isPublic;
    @Column(name = "is_live", columnDefinition = "TINYINT")
    private Integer isLive;
    @Column(name = "category_id")
    private Integer categoryId;
    @Column(name = "max_user")
    private Integer maxUser;
    @Column(name = "now_user")
    private Integer nowUser;
    @Column(name = "start_date")
    private Date startDate;
    @Column(name = "end_date")
    private Date endDate;
    private String hashtag;
}
