/**
 * Comprehensive Integration Test Suite
 * 
 * Run this in the browser console at http://localhost:8081/
 * Tests all major systems: PDF processing, particles, interactivity, performance, accessibility
 */

window.runComprehensiveIntegrationTest = async function() {
  console.clear();
  console.log("🚀 Starting Comprehensive Integration Test Suite...");
  console.log("=" .repeat(80));
  
  const results = {
    pdf_processing: { status: 'pending', details: [] },
    particle_system: { status: 'pending', details: [] },
    interactive_elements: { status: 'pending', details: [] },
    performance: { status: 'pending', details: [] },
    accessibility: { status: 'pending', details: [] },
    responsive_design: { status: 'pending', details: [] },
    console_errors: { status: 'pending', details: [] }
  };

  const startTime = performance.now();

  // Helper function to log test progress
  function logTest(category, test, status, details = '') {
    const icon = status === 'pass' ? '✅' : status === 'fail' ? '❌' : '🔄';
    console.log(`${icon} ${category} - ${test}${details ? ': ' + details : ''}`);
    results[category].details.push({ test, status, details });
    results[category].status = results[category].details.some(d => d.status === 'fail') ? 'fail' : 
                             results[category].details.every(d => d.status === 'pass') ? 'pass' : 'pending';
  }

  try {
    // 1. CONSOLE ERROR MONITORING
    console.log("\n🖥️  TEST GROUP 1: Console Error Monitoring");
    console.log("-".repeat(50));
    
    const originalError = console.error;
    const originalWarn = console.warn;
    const errors = [];
    const warnings = [];
    
    console.error = (...args) => { errors.push(args); originalError.apply(console, args); };
    console.warn = (...args) => { warnings.push(args); originalWarn.apply(console, args); };
    
    logTest('console_errors', 'Error monitoring setup', 'pass', 'Console hooks installed');

    // 2. PARTICLE SYSTEM VERIFICATION
    console.log("\n⭐ TEST GROUP 2: Particle System Initialization");
    console.log("-".repeat(50));
    
    // Check if ocean-fusion theme is set
    const hasTheme = document.documentElement.getAttribute('data-theme') === 'ocean-fusion';
    logTest('particle_system', 'Theme attribute check', hasTheme ? 'pass' : 'fail', 
           hasTheme ? 'data-theme="ocean-fusion"' : 'Theme not set');

    // Check for WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    const webglSupport = !!gl;
    logTest('particle_system', 'WebGL support', webglSupport ? 'pass' : 'fail',
           webglSupport ? 'WebGL context available' : 'WebGL not supported');

    // Check for fusion canvas
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for particle init
    const fusionCanvas = document.getElementById('fusion-canvas');
    logTest('particle_system', 'Fusion canvas element', fusionCanvas ? 'pass' : 'fail',
           fusionCanvas ? 'Canvas found in DOM' : 'Canvas not found');

    // Check for window.fusionEngine
    const fusionEngine = window.fusionEngine;
    logTest('particle_system', 'Fusion engine global', fusionEngine ? 'pass' : 'fail',
           fusionEngine ? 'Engine exposed to window' : 'Engine not found');

    // Check reduced motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    logTest('particle_system', 'Reduced motion check', 'pass', 
           prefersReduced ? 'Reduced motion detected' : 'Animation enabled');

    // 3. PDF PROCESSING PIPELINE
    console.log("\n📄 TEST GROUP 3: PDF Processing Pipeline");
    console.log("-".repeat(50));

    try {
      // Check if Worker is available
      const workerSupported = typeof Worker !== 'undefined';
      logTest('pdf_processing', 'Web Worker support', workerSupported ? 'pass' : 'fail');

      if (workerSupported) {
        // Test worker creation
        const testWorker = new Worker(new URL("/src/workers/invoiceWorker.ts", import.meta.url), { type: "module" });
        logTest('pdf_processing', 'Worker creation', 'pass', 'Worker instantiated successfully');

        // Test message passing with mock data
        const workerResult = await new Promise((resolve, reject) => {
          const timeout = setTimeout(() => {
            testWorker.terminate();
            reject(new Error('Worker timeout'));
          }, 5000);

          const events = [];
          testWorker.addEventListener('message', (e) => {
            events.push(e.data);
            if (e.data.type === 'done') {
              clearTimeout(timeout);
              testWorker.terminate();
              resolve({ events, summary: e.data.summary });
            }
          });

          testWorker.addEventListener('error', (err) => {
            clearTimeout(timeout);
            testWorker.terminate();
            reject(err);
          });

          // Send test data
          const testData = new TextEncoder().encode("Test PDF content");
          const mockFile = new File([testData], "test.pdf", { type: "application/pdf" });
          testWorker.postMessage({ file: mockFile, fileName: "integration-test.pdf" });
        });

        logTest('pdf_processing', 'Event streaming', 'pass', 
               `${workerResult.events.length} events, ${workerResult.summary?.ms}ms`);
      }

    } catch (err) {
      logTest('pdf_processing', 'Worker test', 'fail', err.message);
    }

    // Check crypto.subtle support
    const cryptoSupport = !!(window.crypto && window.crypto.subtle);
    logTest('pdf_processing', 'Crypto API support', cryptoSupport ? 'pass' : 'fail');

    // 4. INTERACTIVE ELEMENTS
    console.log("\n🖱️  TEST GROUP 4: Interactive Elements");
    console.log("-".repeat(50));

    // Check for AnimatedTerminalLog component
    const terminalLog = document.querySelector('[aria-label*="automation process log"]');
    logTest('interactive_elements', 'Terminal log component', terminalLog ? 'pass' : 'fail');

    // Check for file upload input
    const fileInput = document.querySelector('input[type="file"][accept=".pdf"]');
    logTest('interactive_elements', 'PDF file input', fileInput ? 'pass' : 'fail');

    // Check for upload button
    const uploadButtons = Array.from(document.querySelectorAll('button')).filter(btn => 
      btn.textContent.includes('Upload') || btn.textContent.includes('PDF'));
    logTest('interactive_elements', 'Upload buttons', uploadButtons.length > 0 ? 'pass' : 'fail', 
           `${uploadButtons.length} buttons found`);

    // Check for CTAs
    const ctaButtons = document.querySelectorAll('a[href*="booking"], button[class*="cta"]');
    logTest('interactive_elements', 'CTA elements', ctaButtons.length > 0 ? 'pass' : 'fail',
           `${ctaButtons.length} CTA elements`);

    // Check navigation
    const navElements = document.querySelectorAll('nav, [role="navigation"]');
    logTest('interactive_elements', 'Navigation elements', navElements.length > 0 ? 'pass' : 'fail');

    // 5. PERFORMANCE VALIDATION
    console.log("\n⚡ TEST GROUP 5: Performance Metrics");
    console.log("-".repeat(50));

    // Memory usage check
    const memInfo = (performance as any).memory;
    if (memInfo) {
      const heapUsed = Math.round(memInfo.usedJSHeapSize / 1024 / 1024);
      const heapTotal = Math.round(memInfo.totalJSHeapSize / 1024 / 1024);
      logTest('performance', 'Memory usage', heapUsed < 100 ? 'pass' : 'fail', 
             `${heapUsed}MB used, ${heapTotal}MB total`);
    } else {
      logTest('performance', 'Memory metrics', 'fail', 'Memory API not available');
    }

    // FPS estimation (simple)
    let frameCount = 0;
    let fpsStart = performance.now();
    const fpsTest = () => {
      frameCount++;
      if (frameCount < 60) {
        requestAnimationFrame(fpsTest);
      } else {
        const fps = Math.round(60000 / (performance.now() - fpsStart));
        logTest('performance', 'Frame rate estimate', fps > 30 ? 'pass' : 'fail', `~${fps} FPS`);
      }
    };
    requestAnimationFrame(fpsTest);

    // Check for performance observers
    const perfObserverSupport = 'PerformanceObserver' in window;
    logTest('performance', 'Performance Observer API', perfObserverSupport ? 'pass' : 'fail');

    // 6. ACCESSIBILITY COMPLIANCE  
    console.log("\n♿ TEST GROUP 6: Accessibility Compliance");
    console.log("-".repeat(50));

    // Check for skip link
    const skipLink = document.querySelector('a[href="#main"], [class*="skip"]');
    logTest('accessibility', 'Skip to content link', skipLink ? 'pass' : 'fail');

    // Check main landmark
    const mainLandmark = document.querySelector('main, [role="main"]');
    logTest('accessibility', 'Main content landmark', mainLandmark ? 'pass' : 'fail');

    // Check heading structure
    const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'))
                          .map(h => parseInt(h.tagName.charAt(1)));
    const hasH1 = headings.includes(1);
    const properStructure = headings.length > 0 && hasH1;
    logTest('accessibility', 'Heading structure', properStructure ? 'pass' : 'fail',
           `${headings.length} headings, H1: ${hasH1}`);

    // Check aria-live regions
    const liveRegions = document.querySelectorAll('[aria-live]');
    logTest('accessibility', 'Live regions', liveRegions.length > 0 ? 'pass' : 'fail',
           `${liveRegions.length} regions found`);

    // Check color contrast (basic)
    const body = window.getComputedStyle(document.body);
    const hasContrast = body.color !== body.backgroundColor;
    logTest('accessibility', 'Color contrast setup', hasContrast ? 'pass' : 'fail');

    // Check focus management
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    logTest('accessibility', 'Focusable elements', focusableElements.length > 0 ? 'pass' : 'fail',
           `${focusableElements.length} focusable elements`);

    // 7. RESPONSIVE DESIGN
    console.log("\n📱 TEST GROUP 7: Responsive Design");
    console.log("-".repeat(50));

    // Check viewport meta tag
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    logTest('responsive_design', 'Viewport meta tag', viewportMeta ? 'pass' : 'fail');

    // Check CSS Grid/Flexbox usage
    const gridElements = Array.from(document.querySelectorAll('*')).filter(el => {
      const style = window.getComputedStyle(el);
      return style.display === 'grid' || style.display === 'flex';
    });
    logTest('responsive_design', 'Modern layout systems', gridElements.length > 0 ? 'pass' : 'fail',
           `${gridElements.length} grid/flex containers`);

    // Check media queries
    const hasMediaQueries = Array.from(document.styleSheets).some(sheet => {
      try {
        return Array.from(sheet.cssRules || []).some(rule => 
          rule.type === CSSRule.MEDIA_RULE
        );
      } catch (e) { return false; }
    });
    logTest('responsive_design', 'Media queries', hasMediaQueries ? 'pass' : 'fail');

    // Test different viewport sizes (simulation)
    const currentWidth = window.innerWidth;
    logTest('responsive_design', 'Current viewport', 'pass', `${currentWidth}px width`);

    // Wait a bit for async operations to complete
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Final error check
    console.error = originalError;
    console.warn = originalWarn;
    
    logTest('console_errors', 'Error count during tests', errors.length === 0 ? 'pass' : 'fail',
           errors.length === 0 ? 'No errors detected' : `${errors.length} errors found`);
           
    if (warnings.length > 0) {
      logTest('console_errors', 'Warning count', 'fail', `${warnings.length} warnings`);
    }

  } catch (error) {
    console.error("❌ Test suite error:", error);
    results.overall = { status: 'fail', error: error.message };
  }

  const totalTime = Math.round(performance.now() - startTime);
  
  // FINAL REPORT
  console.log("\n" + "=".repeat(80));
  console.log("📊 COMPREHENSIVE INTEGRATION TEST RESULTS");  
  console.log("=".repeat(80));
  
  const categories = Object.keys(results);
  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;
  
  categories.forEach(category => {
    const result = results[category];
    const icon = result.status === 'pass' ? '✅' : result.status === 'fail' ? '❌' : '🔄';
    console.log(`\n${icon} ${category.toUpperCase().replace(/_/g, ' ')}: ${result.status.toUpperCase()}`);
    
    result.details.forEach(detail => {
      const detailIcon = detail.status === 'pass' ? '  ✅' : detail.status === 'fail' ? '  ❌' : '  🔄';
      console.log(`${detailIcon} ${detail.test}${detail.details ? ' - ' + detail.details : ''}`);
      totalTests++;
      if (detail.status === 'pass') passedTests++;
      if (detail.status === 'fail') failedTests++;
    });
  });
  
  console.log("\n" + "=".repeat(80));
  console.log(`📈 SUMMARY: ${passedTests}/${totalTests} tests passed (${Math.round(passedTests/totalTests*100)}%)`);
  console.log(`⏱️  Total execution time: ${totalTime}ms`);
  console.log("=".repeat(80));
  
  if (errors.length > 0) {
    console.log("\n❌ ERRORS DETECTED DURING TESTING:");
    errors.forEach((error, i) => console.log(`${i+1}. `, ...error));
  }
  
  if (warnings.length > 0) {
    console.log("\n⚠️ WARNINGS DETECTED DURING TESTING:");
    warnings.forEach((warning, i) => console.log(`${i+1}. `, ...warning));
  }
  
  return {
    summary: {
      total: totalTests,
      passed: passedTests,  
      failed: failedTests,
      percentage: Math.round(passedTests/totalTests*100),
      executionTime: totalTime
    },
    results,
    errors,
    warnings
  };
};

// Auto-run notification
console.log("🔧 Comprehensive Integration Test Suite loaded!");
console.log("📝 Run runComprehensiveIntegrationTest() to start all tests.");
console.log("⚡ This will test: PDF processing, particles, interactivity, performance, a11y, responsive design");