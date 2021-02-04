package com.web.curation.model.challenge;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Cmember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cmember_id")
    private int cmemberId;

    @Column(name = "challenge_id")
    private Integer challengeId;
    @Column(name = "user_id")
    private Integer userId;
    private Integer progress;
}
