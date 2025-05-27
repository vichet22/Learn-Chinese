# Adsterra Banner Ads Integration

This document explains how to use the Adsterra banner ads in your Chinese learning application.

## Overview

The Adsterra banner ads have been successfully integrated into the Advertisement component with the following features:

- **728x90 banner size** support
- **Responsive design** that adapts to mobile devices
- **Loading animation** while ads are being fetched
- **Clean styling** that matches your application design

## Usage

### Basic Usage

To display an Adsterra banner ad, use the Advertisement component with `type="adsterra"`:

```jsx
import Advertisement from "./components/Advertisement";

// Display Adsterra banner ad
<Advertisement type="adsterra" />
```

### Alternative Usage

You can also import and use the AdsterraBanner component directly:

```jsx
import { AdsterraBanner } from "./components/Advertisement";

// Direct usage
<AdsterraBanner />
```

## Implementation Details

### Ad Configuration

The Adsterra ad is configured with the following parameters:
- **Key**: `20f0d91981b55e2489b2faf3bba88917`
- **Format**: `iframe`
- **Size**: `728x90` (standard banner)
- **Script Source**: `//www.highperformanceformat.com/20f0d91981b55e2489b2faf3bba88917/invoke.js`

### Features

1. **Responsive Design**
   - Desktop: Full 728x90 banner
   - Mobile: Adapts to screen width with minimum height of 90px

2. **Loading State**
   - Shows "Advertisement Loading..." with animated background
   - Automatically replaced when ad loads

3. **Clean Integration**
   - Styled container with subtle borders and shadows
   - Hover effects for better user interaction
   - Consistent with application design

## Current Implementation

The Adsterra banner ads are currently implemented in:

- **Home Page**: Top and bottom banner positions
- **Advertisement Component**: Available for use throughout the application

## Styling

The banner ads include the following CSS classes:
- `.adsterra-banner-container`: Main container styling
- `.adsterra-banner-728x90`: Banner dimensions and layout
- Responsive breakpoints for mobile devices
- Loading animation for better UX

## Performance Considerations

- Scripts are loaded asynchronously to prevent blocking
- Cleanup function removes scripts when component unmounts
- Optimized for fast loading and minimal impact on page performance

## Testing

To test the implementation:

1. Start your development server
2. Navigate to the home page
3. You should see Adsterra banner ads at the top and bottom
4. Test on mobile devices to verify responsive behavior

## Customization

You can customize the banner appearance by modifying the CSS in `src/style/Advertisement.css`:

- Container styling: `.adsterra-banner-container`
- Banner dimensions: `.adsterra-banner-728x90`
- Loading animation: `.adsterra-banner-728x90:empty::before`

## Support

If you need to modify the ad configuration or add additional ad placements, update the `AdsterraBanner` component in `src/components/Advertisement.jsx`.
