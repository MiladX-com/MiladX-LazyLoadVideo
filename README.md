# MiladX Lazy Video
miladx-lazyvideo is a lightweight and highly optimized JavaScript solution for lazy-loading videos. This script helps you significantly improve your website's performance by preventing videos from loading during the initial page load. Videos are only loaded and played when they enter the user's viewport.

## 🚀 Key Features
Performance-Optimized: Utilizes the native IntersectionObserver API for asynchronous loading, ensuring minimal impact on the browser's main thread and a smooth user experience.

Broad Compatibility: Includes a robust fallback mechanism for older browsers that do not support IntersectionObserver, ensuring your videos load correctly on all devices.

Flexible Markup: Supports two convenient methods for defining video sources: using the <source> tag with data-src or adding data-src directly to the <video> tag.

Transparent Video Support: Easily handles transparent video formats by allowing you to specify multiple <source> tags (e.g., WebM and MP4 with the hvc1 codec), guaranteeing compatibility across all major browsers and operating systems, including iOS.

## ⚙️ How to Use
Follow these two simple steps to integrate the script into your website.

Step 1: Add the HTML Markup
Add the miladx-lazyvideo class to your <video> tag. Instead of using the src attribute, use data-src to specify the video file's URL.

Method 1: Using the <source> Tag (Recommended)
This method is ideal for supporting multiple video formats to ensure cross-browser compatibility.
```
<video class="miladx-lazyvideo" poster="https://miladx.com/poster-image.png" autoplay loop playsinline muted>
  <source data-src="https://miladx.com/transparent-video.mp4" type='video/mp4; codecs="hvc1"'>
  <source data-src="https://miladx.com/transparent-video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

Method 2: Using data-src on the <video> Tag
Use this method if you only need to specify a single video source.
```
<video class="miladx-lazyvideo" data-src="https://miladx.com/single-video.mp4" poster="https://miladx.com/poster-image.png" autoplay loop playsinline muted>
  Your browser does not support the video tag.
</video>
```

Step 2: Include the Script
Add the script tag to the <head> or <footer> of your HTML file. It's crucial to use the defer attribute, which ensures the script executes only after the entire HTML document has been parsed.

```
<script src="https://cdn.jsdelivr.net/gh/miladx/miladx-lazyvideo/miladx-lazyvideo.js" defer></script>
```

> [!Note]
> If you are self-hosting the script, replace the URL with the path to your hosted miladx-lazyvideo.js file.

📝 License
This project is licensed under the MIT License.
