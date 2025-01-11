import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  useTheme,
  CardActionArea,
  Stack,
  IconButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch"; // Icon for live link
import GitHubIcon from "@mui/icons-material/GitHub"; // Icon for GitHub repo
import InfoIcon from "@mui/icons-material/Info"; // Icon for project details
import { Project } from "@services/types";
import CardWrapper from "./CardWrapper";
import { PROJECTS } from "@services/constants";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const theme = useTheme();
  return (
    <CardWrapper>
      <CardMedia
        component="img"
        height="300"
        image={project.images[0]}
        alt={project.title}
        sx={{
          borderBottom: "5px solid #6A0DAD",
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
      {/* Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1, // Allows content to grow and fill the space
          justifyContent: "space-between", // Pushes buttons to the bottom
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h5">{project.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {project.briefDescription}
          </Typography>
        </Box>

        {/* Buttons */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ p: 2 }}
        >
          {/* Demo Button */}
          {project.liveLink && (
            <IconButton
              color="secondary"
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LaunchIcon />
            </IconButton>
          )}

          {/* Repo Button */}
          {project.repositoryLink && (
            <IconButton
              color="secondary"
              href={project.repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          )}

          {/* Info Button */}
          <IconButton
            color="secondary"
            component={NavLink}
            to={`/${PROJECTS.toLowerCase()}/${project.id}`}
            sx={{
              textTransform: "none",
              textDecoration: "none",
            }}
          >
            <InfoIcon />
          </IconButton>
        </Stack>
      </Box>
    </CardWrapper>
  );
};

export default ProjectCard;
