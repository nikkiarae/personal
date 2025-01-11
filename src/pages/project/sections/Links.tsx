import React from "react";
import { Stack, Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch"; // Icon for live link
import GitHubIcon from "@mui/icons-material/GitHub"; // Icon for GitHub repo

interface LinksProps {
  live?: string;
  repo?: string;
}

const Links: React.FC<LinksProps> = ({ live, repo }) => {
  return (
    <Stack direction="row" spacing={2}>
      {/* Live Link Button */}
      {live && (
        <Button
          variant="contained"
          color="primary"
          startIcon={<LaunchIcon />}
          href={live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </Button>
      )}

      {/* GitHub Repo Button */}
      {repo && (
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<GitHubIcon />}
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </Button>
      )}
    </Stack>
  );
};

export default Links;