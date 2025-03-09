# Setting Up GitHub Pages for PriceScout

To enable GitHub Pages for this repository and deploy the application:

1. Go to the repository settings:
   - Navigate to https://github.com/lamezati/shopping-app/settings

2. Scroll down to the "Pages" section in the sidebar menu and click on it

3. Under "Build and deployment" section:
   - Set "Source" to "GitHub Actions"
   - This will use our pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml`

4. Once enabled, the GitHub Actions workflow will automatically build and deploy the site when changes are pushed to the main branch

5. After the first successful deployment, your site will be available at:
   https://lamezati.github.io/shopping-app/

6. You can check the status of the deployment in the "Actions" tab:
   https://github.com/lamezati/shopping-app/actions
