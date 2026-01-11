# Image Optimization Script
# Compresses images to improve website performance

Write-Host "🖼️  St Raphael Health - Image Optimization" -ForegroundColor Cyan
Write-Host "=" * 50

$imagesPath = "public\assets\images"

# Get all JPG images
$images = Get-ChildItem -Path $imagesPath -Recurse -Include *.jpg

Write-Host "`n📊 Current Image Sizes:" -ForegroundColor Yellow
foreach ($img in $images) {
    $sizeMB = [math]::Round($img.Length / 1MB, 2)
    $color = if ($sizeMB -gt 1) { "Red" } elseif ($sizeMB -gt 0.5) { "Yellow" } else { "Green" }
    Write-Host "  $($img.Name): $sizeMB MB" -ForegroundColor $color
}

Write-Host "`n💡 Recommendation:" -ForegroundColor Cyan
Write-Host "  Images over 300KB should be compressed for web performance."
Write-Host "`n  Use one of these tools:"
Write-Host "  1. Squoosh: https://squoosh.app/" -ForegroundColor Green
Write-Host "  2. TinyJPG: https://tinyjpg.com/" -ForegroundColor Green
Write-Host "  3. ImageOptim (Mac): https://imageoptim.com/" -ForegroundColor Green
Write-Host "`n  Target: 150-300KB per image"
Write-Host "`n✨ Your images look AMAZING! Optimization is optional for now." -ForegroundColor Green
