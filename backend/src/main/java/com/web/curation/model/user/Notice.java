package com.web.curation.model.user;

import lombok.*;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Notice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notice_id")
    private int noticeId;

    @Column(name = "user_id")
    private int userId;
    @Column(name = "from_user_id")
    private int fromUserId;
    private String content;
    @Column(name = "challenge_id")
    private int challengeId;
    @Column(name = "is_check", columnDefinition = "TINYINT")
    private int isCheck;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(insertable = false, updatable = false)
    private Date regtime;
}
