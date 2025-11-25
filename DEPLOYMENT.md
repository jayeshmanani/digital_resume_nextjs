# Deploying to Vercel

This guide will help you deploy your Next.js portfolio to Vercel, the best platform for Next.js applications.

## Prerequisites
-   A [GitHub](https://github.com/) account.
-   A [Vercel](https://vercel.com/) account (you can sign up with GitHub).
-   Your project code locally (which you have now).

## Step 1: Push to GitHub

1.  **Initialize Git** (if not already done):
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Create a New Repository** on GitHub.
    -   Go to GitHub -> New Repository.
    -   Name it `portfolio-next` (or whatever you like).
    -   Do **not** initialize with README/gitignore (you already have them).

3.  **Push Code**:
    -   Copy the commands GitHub gives you under "…or push an existing repository from the command line".
    -   It will look like this:
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/portfolio-next.git
        git branch -M main
        git push -u origin main
        ```

## Step 2: Deploy on Vercel

1.  **Log in to Vercel**.
2.  Click **"Add New..."** -> **"Project"**.
3.  **Import Git Repository**:
    -   You should see your `portfolio-next` repo in the list. Click **Import**.
4.  **Configure Project**:
    -   **Framework Preset**: Vercel will automatically detect **Next.js**.
    -   **Root Directory**: Ensure this is set to `portfolio-next` (if that's where your package.json is).
    -   **Build Command**: `next build` (Default - Leave as is).
    -   **Output Directory**: `.next` (Default - Leave as is).
    -   **Environment Variables**: You don't have any yet, so leave blank.
5.  Click **Deploy**.

## Step 3: Success!

-   Vercel will build your project.
-   Once done, you will get a live URL (e.g., `portfolio-next.vercel.app`).
-   Any time you push changes to GitHub, Vercel will automatically redeploy!

## Troubleshooting

-   **Build Failed?** Check the logs in Vercel.
-   **Node Version**: Ensure Vercel is using Node.js 20.x (Settings -> General -> Node.js Version).
