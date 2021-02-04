package com.web.curation.model.feed;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Checkfeed {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "feed_id")
    private int feedId;

    @Column(name = "challenge_id")
    private Integer challengeId;
    @Column(name = "user_id")
    private Integer userId;
    private String title;
    private String content;
    @Column(name = "img_path")
    private String imgPath;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(insertable = false, updatable = false)
    private Date regtime;
}
