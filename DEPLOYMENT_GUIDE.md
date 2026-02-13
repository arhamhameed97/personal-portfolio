# Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push your code to GitHub**:
   ```bash
   # If you haven't created a GitHub repository yet:
   # Go to https://github.com/new and create a new repository
   
   # Then push your code:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!** Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

## Custom Domain (Optional)

1. Go to your Vercel project settings
2. Click on "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Environment Variables

This project doesn't require any environment variables for basic deployment. If you add features like analytics or contact forms in the future:

1. Go to your Vercel project settings
2. Click on "Environment Variables"
3. Add your variables

## Post-Deployment Checklist

- [ ] Check all navigation links work
- [ ] Test all animations on mobile and desktop
- [ ] Verify resume download works
- [ ] Test all external links (GitHub, LinkedIn, projects)
- [ ] Check responsiveness on different screen sizes
- [ ] Test contact information copy buttons
- [ ] Verify SEO meta tags using [metatags.io](https://metatags.io)

## Updating Your Portfolio

To update your portfolio after deployment:

1. Make changes locally
2. Test with `npm run dev`
3. Build to verify: `npm run build`
4. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: your changes"
   git push
   ```
5. Vercel will automatically redeploy!

## Performance Optimization

Your site is already optimized with:
- ✅ Next.js Image optimization
- ✅ Static page generation
- ✅ Code splitting
- ✅ Minimized CSS and JS
- ✅ Fast refresh in development

## Troubleshooting

### Build fails on Vercel
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

### Images not loading
- Make sure images are in the `public` folder
- Use `/image-name.png` for public folder paths

### Animations not working
- Check browser console for errors
- Ensure Framer Motion is installed
- Test on different browsers

## Support

If you encounter any issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Check the [Vercel documentation](https://vercel.com/docs)
3. Review build logs for specific errors

---

**Your portfolio is ready to impress recruiters! 🚀**
