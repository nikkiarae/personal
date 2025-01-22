"use client";

import React, { FC } from "react";
import {
  CardMedia,
  Typography,
  Box,
  Stack,
  IconButton,
  Chip,
} from "@mui/material";
import Link from "next/link"; // Importing Next.js Link
import LaunchIcon from "@mui/icons-material/Launch"; // Icon for live link
import GitHubIcon from "@mui/icons-material/GitHub"; // Icon for GitHub repo
import InfoIcon from "@mui/icons-material/Info"; // Icon for project details
import { Project } from "@/types/types";
import CardWrapper from "./CardWrapper";
import { PROJECTS } from "@/lib/constants/navigation";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <CardWrapper>
      <CardMedia
        component="img"
        image={project.images[0]}
        alt={project.title}
        sx={{
          borderBottom: "5px solid #6A0DAD",
          objectFit: "cover",
          objectPosition: "top",
          height: { xs: 230, sm: 300 },
        }}
      />
      {/* Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1, // Allows content to grow and fill the space
          justifyContent: "space-between", // Pushes buttons to the bottom
          p: 1,
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h5">{project.title}</Typography>
          {/* Technologies Used */}
          <Stack
            direction="row"
            flexWrap="wrap"
            sx={{
              gap: 1,
            }}
          >
            {project.technologiesUsed?.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                variant="outlined"
                color="secondary"
                size="small"
              />
            ))}
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {project.briefDescription}
          </Typography>
        </Stack>

        {/* Buttons */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          mt={{ xs: 1, sm: 2 }}
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
          <Link href={`/${PROJECTS.toLowerCase()}/${project._id}`} passHref>
            <IconButton
              color="secondary"
              sx={{
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              <InfoIcon />
            </IconButton>
          </Link>
        </Stack>
      </Box>
    </CardWrapper>
  );
};

export default ProjectCard;