-- create tables

create table blog_user (
    user_uuid VARCHAR(36) NOT NULL,
    nickname VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(20) NOT NULL,
    password_md5_hash VARCHAR(32) NOT NULL,
    signature VARCHAR(100) NULL,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT blog_user_pk PRIMARY KEY (user_uuid)
);

create table tag (
    id BIGSERIAL NOT NULL,
    key VARCHAR(15) NOT NULL UNIQUE,
    description VARCHAR(100) NULL,
    CONSTRAINT tag_pk PRIMARY KEY (id)
);

create table post (
    post_uuid VARCHAR(36) NOT NULL,
    author_id VARCHAR(36) NOT NULL,
    title VARCHAR(50) NOT NULL,
    summary VARCHAR(100) NULL,
    published BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    published_at DATE,
    content TEXT,
    CONSTRAINT blog_post_pk PRIMARY KEY (post_uuid),
    CONSTRAINT blog_post_user_fk
      FOREIGN KEY(author_id) 
	  REFERENCES blog_user(user_uuid)
);

create table post_comment (
    comment_uuid VARCHAR(36) NOT NULL,
    post_uuid VARCHAR(36) NOT NULL,
    content TEXT NULL,
    published BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    published_at TIMESTAMP,
    CONSTRAINT blog_comment_pk PRIMARY KEY (comment_uuid),
    CONSTRAINT blog_comment_post_fk
      FOREIGN KEY(post_uuid) 
	  REFERENCES post(post_uuid)
);

create table post_x_tag (
    post_uuid VARCHAR(36) NOT NULL,
    tag_id BIGINT NOT NULL,
    CONSTRAINT blog_post_tag_pk PRIMARY KEY (post_uuid, tag_id),
    CONSTRAINT blog_post_x_tag_post_fk
      FOREIGN KEY(post_uuid) 
	  REFERENCES post(post_uuid),
    CONSTRAINT blog_post_x_tag_tag_fk
      FOREIGN KEY(tag_id) 
	  REFERENCES tag(id)
);
