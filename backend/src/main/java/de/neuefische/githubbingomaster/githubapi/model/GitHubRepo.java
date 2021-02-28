package de.neuefische.githubbingomaster.githubapi.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class GitHubRepo {

    @JsonProperty("name")
    private String repository;
    @JsonProperty("html_url")
    private String repositoryUrl;
}
