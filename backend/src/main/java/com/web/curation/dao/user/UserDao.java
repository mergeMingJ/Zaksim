
package com.web.curation.dao.user;

import java.util.Optional;

import com.web.curation.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Integer> {
    User getUserByEmail(String email);

    // email과 password 인자를 가지고 해당하는 user 객체를 찾아옴
    Optional<User> findUserByEmailAndPassword(String email, String password);

    User findByUserId(int userId);

    User findByEmail(String email);

    User findByEmailAndPassword(String email, String password);

    String findNicknameByUserId(int userId);
}
