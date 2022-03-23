import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Card, FormControl, FormSelect, InputGroup } from "react-bootstrap";
import { NewsArticle } from "../../types/NewsArticle";
import { fetchNewsArticles } from "../../api/NewsArticles";

function News() {
    const [newsArticles, setNewsArticles] = useState<Array<NewsArticle>>([]);

    useEffect(() => {
        fetchNewsArticles().then((newsArticles) => {
            setNewsArticles(newsArticles);
        });
    }, []);

    return (
        <Card>
            <Card.Header>
                <InputGroup className="mb-2">
                    <FormControl />
                    <Button variant="primary">Search</Button>
                </InputGroup>
                <div className="row">
                    <div className="col-md-9" />
                    <div className="col-md-3">
                        <FormSelect>
                            <option>Select News Feed</option>
                        </FormSelect>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                {newsArticles &&
                    newsArticles.map((newsArticle) => {
                        return (
                            <Card className="mb-3">
                                <Card.Header>
                                    <a href={newsArticle.link}>
                                        <h2 className="h4 mb-2">
                                            {newsArticle.title}
                                        </h2>
                                    </a>
                                    <div className="d-flex">
                                        <div style={{ marginRight: "15px" }}>
                                            {newsArticle.author}
                                        </div>
                                        <div>
                                            {newsArticle.publishDate.toDateString()}
                                        </div>
                                    </div>
                                </Card.Header>

                                <Card.Body
                                    dangerouslySetInnerHTML={{
                                        __html: newsArticle.description,
                                    }}
                                />
                            </Card>
                        );
                    })}
            </Card.Body>
        </Card>
    );
}

export default News;
