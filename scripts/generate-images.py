#!/usr/bin/env python3
"""
Automated Image Generation Script for St Raphael Health Website
Uses Google AI Studio (Gemini) API to generate images

Setup:
1. Install: pip install google-generativeai python-dotenv pillow
2. Get API key from https://aistudio.google.com/
3. Add to .env file: GOOGLE_AI_API_KEY=your_key_here
4. Run: python scripts/generate-images.py
"""

import os
import sys
import time
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

try:
    import google.generativeai as genai
    from PIL import Image
except ImportError:
    print("❌ Required packages not installed!")
    print("\nPlease run:")
    print("pip install google-generativeai python-dotenv pillow")
    sys.exit(1)

# Configuration
API_KEY = os.getenv('GOOGLE_AI_API_KEY') or os.getenv('NANO_BANANA_API_KEY')
OUTPUT_DIR = Path(__file__).parent.parent / 'public' / 'assets' / 'images'

# Image generation prompts (priority order)
IMAGE_PROMPTS = [
    {
        'name': 'hero-hospitals.jpg',
        'folder': 'hero',
        'prompt': 'Professional photograph of a modern hospital exterior at golden hour, warm lighting, clean architecture, welcoming entrance with glass doors, landscaped grounds, Texas regional hospital setting, photorealistic, high-end architectural photography, warm color grading with subtle gold tones, 16:9 aspect ratio',
        'priority': 1
    },
    {
        'name': 'hero-physicians.jpg',
        'folder': 'hero',
        'prompt': 'Professional photograph of physicians collaborating in a modern medical office, natural lighting through large windows, diverse medical team reviewing patient charts on digital tablets, warm professional atmosphere, clean modern interior design, photorealistic, corporate healthcare photography style, 16:9 aspect ratio',
        'priority': 2
    },
    {
        'name': 'case-study-bmc.jpg',
        'folder': 'case-studies',
        'prompt': 'Professional exterior photograph of a large modern surgical hospital in Greater Houston, multiple stories, contemporary architecture, clear blue sky, well-maintained landscaping, parking area with vehicles, Texas setting, golden hour lighting, photorealistic, architectural photography, 16:9 aspect ratio',
        'priority': 3
    },
    {
        'name': 'case-study-ehs.jpg',
        'folder': 'case-studies',
        'prompt': 'Professional photograph of a Northeast Houston hospital exterior, modern emergency department entrance with ambulance bay, clean architecture, professional healthcare facility, daytime lighting, photorealistic, architectural photography, 16:9 aspect ratio',
        'priority': 4
    },
    {
        'name': 'case-study-ddc.jpg',
        'folder': 'case-studies',
        'prompt': 'Professional photograph of a community hospital in Cleveland Texas, smaller regional hospital building, welcoming entrance, American flag, parking lot, rural Texas setting, warm afternoon lighting, photorealistic, architectural photography, 16:9 aspect ratio',
        'priority': 5
    },
    {
        'name': 'hospital-advisory-leadership.jpg',
        'folder': 'hospital-advisory',
        'prompt': 'Professional photograph of hospital executives in a modern boardroom, diverse leadership team reviewing financial charts and operational dashboards, large windows with natural light, professional attire, collaborative atmosphere, photorealistic, corporate photography style, warm color grading, 16:9 aspect ratio',
        'priority': 6
    },
    {
        'name': 'approach-execution.jpg',
        'folder': 'approach',
        'prompt': 'Professional photograph of hospital executives and consultants working together at a conference table, laptops open, documents spread out, collaborative problem-solving session, natural window light, diverse team, photorealistic, corporate documentary photography, 16:9 aspect ratio',
        'priority': 7
    },
    {
        'name': 'profit-sustainability.jpg',
        'folder': 'profit',
        'prompt': 'Professional photograph of a thriving modern hospital interior, busy but organized patient care area, state-of-the-art medical equipment, bright clean environment, doctors and nurses providing care, photorealistic, healthcare documentary photography, 16:9 aspect ratio',
        'priority': 8
    }
]

def generate_image(model, prompt, output_path):
    """Generate image using Google AI Studio API"""
    print(f"\n🎨 Generating: {output_path.name}")
    print(f"📝 Prompt: {prompt[:80]}...")
    
    try:
        # Generate image
        response = model.generate_content(prompt)
        
        # Save image
        if hasattr(response, 'images') and response.images:
            image_data = response.images[0]
            with open(output_path, 'wb') as f:
                f.write(image_data)
            print(f"✅ Saved to: {output_path}")
            return True
        else:
            print(f"⚠️  No image generated - response: {response}")
            return False
            
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return False

def main():
    print("🚀 St Raphael Health - Image Generation Script")
    print("=" * 60)
    print()
    
    # Check API key
    if not API_KEY:
        print("❌ Error: API key not found!")
        print("\nPlease follow these steps:")
        print("1. Visit https://aistudio.google.com/")
        print("2. Get your API key")
        print("3. Add to .env file: GOOGLE_AI_API_KEY=your_key_here")
        print("4. Run this script again\n")
        sys.exit(1)
    
    # Configure API
    genai.configure(api_key=API_KEY)
    
    # Initialize model (Imagen 3)
    try:
        model = genai.GenerativeModel('imagen-3.0-generate-001')
    except Exception as e:
        print(f"⚠️  Could not initialize Imagen model: {e}")
        print("Note: Image generation with Gemini may require specific API access")
        print("\nAlternative: Use the manual process with IMAGE_GENERATION_PROMPTS.md")
        sys.exit(1)
    
    print(f"📁 Output directory: {OUTPUT_DIR}")
    print(f"🎯 Total images to generate: {len(IMAGE_PROMPTS)}")
    print("\n⚠️  Note: This script requires a valid Google AI Studio API key")
    print("⚠️  Image generation may take 30-60 seconds per image")
    print("⚠️  API usage may incur costs - check Google AI Studio pricing\n")
    
    # Confirmation
    try:
        input("Press Enter to continue or Ctrl+C to cancel...")
    except KeyboardInterrupt:
        print("\n\n❌ Cancelled by user")
        sys.exit(0)
    
    success_count = 0
    error_count = 0
    skipped_count = 0
    
    for config in IMAGE_PROMPTS:
        output_path = OUTPUT_DIR / config['folder'] / config['name']
        
        # Check if already exists
        if output_path.exists():
            print(f"⏭️  Skipping {config['name']} (already exists)")
            skipped_count += 1
            continue
        
        # Generate image
        if generate_image(model, config['prompt'], output_path):
            success_count += 1
        else:
            error_count += 1
        
        # Rate limiting
        time.sleep(2)
    
    # Summary
    print("\n" + "=" * 60)
    print("✨ Image Generation Complete!")
    print(f"✅ Success: {success_count}")
    print(f"❌ Errors: {error_count}")
    print(f"⏭️  Skipped: {skipped_count}")
    print("\n💡 Next steps:")
    print("1. Check generated images in public/assets/images/")
    print("2. Optimize images if needed (compress to < 300KB)")
    print("3. Test at http://localhost:3000")
    print("4. Deploy to production!\n")

if __name__ == '__main__':
    main()
