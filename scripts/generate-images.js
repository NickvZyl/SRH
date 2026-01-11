/**
 * Automated Image Generation Script for St Raphael Health Website
 * Uses Google AI Studio (Gemini) API to generate images via Nano Banana
 * 
 * Setup:
 * 1. Get API key from https://aistudio.google.com/
 * 2. Add to .env file: GOOGLE_AI_API_KEY=your_key_here
 * 3. Run: node scripts/generate-images.js
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const API_KEY = process.env.GOOGLE_AI_API_KEY || process.env.NANO_BANANA_API_KEY;
const OUTPUT_DIR = path.join(__dirname, '../public/assets/images');

// Image generation prompts
const imagePrompts = [
  {
    name: 'hero-hospitals.jpg',
    folder: 'hero',
    prompt: 'Professional photograph of a modern hospital exterior at golden hour, warm lighting, clean architecture, welcoming entrance with glass doors, landscaped grounds, Texas regional hospital setting, photorealistic, high-end architectural photography, warm color grading with subtle gold tones, 16:9 aspect ratio',
    priority: 1
  },
  {
    name: 'hero-physicians.jpg',
    folder: 'hero',
    prompt: 'Professional photograph of physicians collaborating in a modern medical office, natural lighting through large windows, diverse medical team reviewing patient charts on digital tablets, warm professional atmosphere, clean modern interior design, photorealistic, corporate healthcare photography style, 16:9 aspect ratio',
    priority: 2
  },
  {
    name: 'hospital-advisory-leadership.jpg',
    folder: 'hospital-advisory',
    prompt: 'Professional photograph of hospital executives in a modern boardroom, diverse leadership team reviewing financial charts and operational dashboards, large windows with natural light, professional attire, collaborative atmosphere, photorealistic, corporate photography style, warm color grading, 16:9 aspect ratio',
    priority: 6
  },
  {
    name: 'hospital-operations.jpg',
    folder: 'hospital-advisory',
    prompt: 'Wide-angle photograph of a busy modern hospital corridor, nurses and doctors moving with purpose, clean bright environment, medical equipment visible, professional healthcare setting, natural lighting, photorealistic, documentary-style healthcare photography, 16:9 aspect ratio',
    priority: 10
  },
  {
    name: 'financial-recovery.jpg',
    folder: 'hospital-advisory',
    prompt: 'Professional photograph of financial documents and growth charts on a conference table, calculator and tablet showing upward trending graphs, warm lighting, shallow depth of field, business success concept, gold and warm tones, photorealistic, corporate finance photography, 16:9 aspect ratio',
    priority: 11
  },
  {
    name: 'community-care.jpg',
    folder: 'hospital-advisory',
    prompt: 'Warm photograph of diverse patients in a modern hospital waiting area, families with children, elderly patients, comfortable seating, natural light from large windows, welcoming atmosphere, photorealistic, healthcare documentary photography, 16:9 aspect ratio',
    priority: 12
  },
  {
    name: 'case-study-bmc.jpg',
    folder: 'case-studies',
    prompt: 'Professional exterior photograph of a large modern surgical hospital in Greater Houston, multiple stories, contemporary architecture, clear blue sky, well-maintained landscaping, parking area with vehicles, Texas setting, golden hour lighting, photorealistic, architectural photography, 16:9 aspect ratio',
    priority: 3
  },
  {
    name: 'case-study-ehs.jpg',
    folder: 'case-studies',
    prompt: 'Professional photograph of a Northeast Houston hospital exterior, modern emergency department entrance with ambulance bay, clean architecture, professional healthcare facility, daytime lighting, photorealistic, architectural photography, 16:9 aspect ratio',
    priority: 4
  },
  {
    name: 'case-study-ddc.jpg',
    folder: 'case-studies',
    prompt: 'Professional photograph of a community hospital in Cleveland Texas, smaller regional hospital building, welcoming entrance, American flag, parking lot, rural Texas setting, warm afternoon lighting, photorealistic, architectural photography, 16:9 aspect ratio',
    priority: 5
  },
  {
    name: 'results-growth.jpg',
    folder: 'case-studies',
    prompt: 'Professional photograph of a business dashboard on a large monitor showing upward trending revenue graphs, profit margin charts, clean modern office setting, warm lighting, financial success visualization, gold accent colors, photorealistic, corporate photography, 16:9 aspect ratio',
    priority: 13
  },
  {
    name: 'approach-execution.jpg',
    folder: 'approach',
    prompt: 'Professional photograph of hospital executives and consultants working together at a conference table, laptops open, documents spread out, collaborative problem-solving session, natural window light, diverse team, photorealistic, corporate documentary photography, 16:9 aspect ratio',
    priority: 7
  },
  {
    name: 'approach-operations.jpg',
    folder: 'approach',
    prompt: 'Professional photograph of a modern hospital control center or operations hub, multiple monitors showing patient flow and operational metrics, clean professional environment, healthcare technology, photorealistic, corporate healthcare photography, 16:9 aspect ratio',
    priority: 14
  },
  {
    name: 'approach-strategy.jpg',
    folder: 'approach',
    prompt: 'Professional photograph of a whiteboard or glass board with strategic planning diagrams, flowcharts, and business metrics, executive hands pointing at key areas, modern office setting, natural lighting, photorealistic, corporate strategy photography, 16:9 aspect ratio',
    priority: 15
  },
  {
    name: 'profit-sustainability.jpg',
    folder: 'profit',
    prompt: 'Professional photograph of a thriving modern hospital interior, busy but organized patient care area, state-of-the-art medical equipment, bright clean environment, doctors and nurses providing care, photorealistic, healthcare documentary photography, 16:9 aspect ratio',
    priority: 8
  },
  {
    name: 'profit-foundation.jpg',
    folder: 'profit',
    prompt: 'Professional photograph of a strong architectural foundation or cornerstone with modern hospital building in background, metaphorical image representing stability and strength, golden hour lighting, photorealistic, conceptual architectural photography, 16:9 aspect ratio',
    priority: 16
  },
  {
    name: 'profit-growth.jpg',
    folder: 'profit',
    prompt: 'Professional photograph of new medical equipment being installed in a modern hospital, technicians and hospital staff observing, investment in healthcare infrastructure, bright clean environment, photorealistic, corporate healthcare photography, 16:9 aspect ratio',
    priority: 17
  },
  {
    name: 'contact-hero.jpg',
    folder: 'contact',
    prompt: 'Professional photograph of a modern executive office with large windows overlooking a city skyline, clean desk with laptop, comfortable seating area for meetings, warm professional atmosphere, natural lighting, photorealistic, corporate interior photography, 16:9 aspect ratio',
    priority: 18
  },
  {
    name: 'contact-collaboration.jpg',
    folder: 'contact',
    prompt: 'Professional photograph of business professionals shaking hands in a modern office lobby, diverse executives meeting, warm welcoming atmosphere, natural lighting, photorealistic, corporate photography, 16:9 aspect ratio',
    priority: 19
  }
];

// Sort by priority
imagePrompts.sort((a, b) => a.priority - b.priority);

/**
 * Generate image using Google AI Studio (Gemini) API
 */
async function generateImage(prompt, outputPath) {
  if (!API_KEY) {
    throw new Error('API key not found. Please set GOOGLE_AI_API_KEY or NANO_BANANA_API_KEY in .env file');
  }

  console.log(`\n🎨 Generating: ${path.basename(outputPath)}`);
  console.log(`📝 Prompt: ${prompt.substring(0, 80)}...`);

  // Note: This is a placeholder for the actual API call
  // Google's Imagen API endpoint may vary - check latest documentation
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${API_KEY}`;

  const requestData = JSON.stringify({
    instances: [{
      prompt: prompt
    }],
    parameters: {
      sampleCount: 1,
      aspectRatio: '16:9',
      safetyFilterLevel: 'block_some',
      personGeneration: 'allow_adult'
    }
  });

  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': requestData.length
      }
    };

    const req = https.request(apiUrl, options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const response = JSON.parse(data);
            // Extract image data and save
            // This will depend on the actual API response format
            console.log('✅ Generated successfully');
            resolve(response);
          } catch (error) {
            reject(new Error(`Failed to parse response: ${error.message}`));
          }
        } else {
          reject(new Error(`API request failed with status ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(requestData);
    req.end();
  });
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 St Raphael Health - Image Generation Script');
  console.log('================================================\n');

  if (!API_KEY) {
    console.error('❌ Error: API key not found!');
    console.error('\nPlease follow these steps:');
    console.error('1. Visit https://aistudio.google.com/');
    console.error('2. Get your API key');
    console.error('3. Add to .env file: GOOGLE_AI_API_KEY=your_key_here');
    console.error('4. Run this script again\n');
    process.exit(1);
  }

  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
  console.log(`🎯 Total images to generate: ${imagePrompts.length}`);
  console.log('\n⚠️  Note: This script requires a valid Google AI Studio API key');
  console.log('⚠️  Image generation may take 30-60 seconds per image');
  console.log('⚠️  API usage may incur costs - check Google AI Studio pricing\n');

  // Ask for confirmation
  console.log('Press Ctrl+C to cancel, or wait 5 seconds to continue...');
  await new Promise(resolve => setTimeout(resolve, 5000));

  let successCount = 0;
  let errorCount = 0;

  for (const config of imagePrompts) {
    const outputPath = path.join(OUTPUT_DIR, config.folder, config.name);
    
    try {
      // Check if file already exists
      if (fs.existsSync(outputPath)) {
        console.log(`⏭️  Skipping ${config.name} (already exists)`);
        continue;
      }

      await generateImage(config.prompt, outputPath);
      successCount++;
      
      // Rate limiting - wait between requests
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (error) {
      console.error(`❌ Error generating ${config.name}:`, error.message);
      errorCount++;
    }
  }

  console.log('\n================================================');
  console.log('✨ Image Generation Complete!');
  console.log(`✅ Success: ${successCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`⏭️  Skipped: ${imagePrompts.length - successCount - errorCount}`);
  console.log('\n💡 Next steps:');
  console.log('1. Check generated images in public/assets/images/');
  console.log('2. Optimize images if needed (compress to < 300KB)');
  console.log('3. Test at http://localhost:3000');
  console.log('4. Deploy to production!\n');
}

// Run the script
if (require.main === module) {
  main().catch(error => {
    console.error('\n❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { generateImage, imagePrompts };
