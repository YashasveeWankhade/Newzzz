
CREATE TABLE NEWS_ARTICLES (
    id NUMBER PRIMARY KEY,
    title VARCHAR2(255),
    description VARCHAR2(1000),
    published_at DATE
);

INSERT INTO NEWS_ARTICLES VALUES (1, 'AI Beats Humans in News Curation', 'An AI algorithm now curates trending news better than humans.', SYSDATE);
