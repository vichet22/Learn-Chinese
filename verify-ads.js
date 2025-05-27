// Simple verification script to check Advertisement component
import fs from 'fs';
import path from 'path';

const advertisementPath = path.join(process.cwd(), 'src', 'components', 'Advertisement.jsx');

try {
  const content = fs.readFileSync(advertisementPath, 'utf8');
  
  // Check if sampleAds is defined
  const hasSampleAds = content.includes('const sampleAds = [');
  console.log('✓ sampleAds defined:', hasSampleAds);
  
  // Check if AdsterraBanner is defined
  const hasAdsterraBanner = content.includes('const AdsterraBanner = ()');
  console.log('✓ AdsterraBanner defined:', hasAdsterraBanner);
  
  // Check if error handling is present
  const hasErrorHandling = content.includes('if (!sampleAds || !Array.isArray(sampleAds))');
  console.log('✓ Error handling present:', hasErrorHandling);
  
  // Check exports
  const hasDefaultExport = content.includes('export default Advertisement');
  const hasNamedExport = content.includes('export { AdsterraBanner }');
  console.log('✓ Default export:', hasDefaultExport);
  console.log('✓ Named export:', hasNamedExport);
  
  if (hasSampleAds && hasAdsterraBanner && hasErrorHandling && hasDefaultExport && hasNamedExport) {
    console.log('\n🎉 All checks passed! Advertisement component should work correctly.');
  } else {
    console.log('\n❌ Some checks failed. Please review the component.');
  }
  
} catch (error) {
  console.error('Error reading Advertisement.jsx:', error.message);
}
