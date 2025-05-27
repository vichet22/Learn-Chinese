// Verification script to confirm sampleAds is completely removed
import fs from 'fs';
import path from 'path';

const advertisementPath = path.join(process.cwd(), 'src', 'components', 'Advertisement.jsx');

try {
  const content = fs.readFileSync(advertisementPath, 'utf8');
  
  // Check that sampleAds is NOT present
  const hasSampleAds = content.includes('sampleAds');
  console.log('❌ sampleAds removed:', !hasSampleAds);
  
  // Check that AdsterraBanner is present
  const hasAdsterraBanner = content.includes('const AdsterraBanner = (');
  console.log('✓ AdsterraBanner present:', hasAdsterraBanner);
  
  // Check that Advertisement component only returns AdsterraBanner
  const advertisementReturnsAdsterra = content.includes('return <AdsterraBanner className={className} />;');
  console.log('✓ Advertisement only returns AdsterraBanner:', advertisementReturnsAdsterra);
  
  // Check exports
  const hasDefaultExport = content.includes('export default Advertisement');
  const hasNamedExport = content.includes('export { AdsterraBanner }');
  console.log('✓ Default export:', hasDefaultExport);
  console.log('✓ Named export:', hasNamedExport);
  
  // Count total lines (should be much shorter now)
  const lineCount = content.split('\n').length;
  console.log('✓ Total lines:', lineCount, '(simplified)');
  
  if (!hasSampleAds && hasAdsterraBanner && advertisementReturnsAdsterra && hasDefaultExport && hasNamedExport) {
    console.log('\n🎉 Perfect! Advertisement component is now clean and only uses Adsterra banners.');
    console.log('📝 No more sampleAds references - this should fix the Vercel deployment issue.');
  } else {
    console.log('\n❌ Some issues found. Please review the component.');
  }
  
} catch (error) {
  console.error('Error reading Advertisement.jsx:', error.message);
}
