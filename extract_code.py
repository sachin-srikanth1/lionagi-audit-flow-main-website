#!/usr/bin/env python3
"""
Script to concatenate all TSX, CSS, config files for AI evaluation
"""

import os
from pathlib import Path

def extract_code():
    project_root = Path(__file__).parent
    output_file = project_root / "code_extract.txt"
    
    # File patterns to include
    file_patterns = {
        "TSX Components": ["**/*.tsx", "**/*.ts"],
        "Styling": ["**/*.css", "**/tailwind.config.*", "**/postcss.config.*"],
        "Config": ["package.json", "vite.config.*", "tsconfig.json", "index.html"],
        "Router": ["**/*router*", "**/*Router*"]
    }
    
    # Directories to exclude
    exclude_dirs = {".git", "node_modules", "dist", "build", ".next", "coverage"}
    
    def should_exclude(file_path):
        # Exclude general directories
        if any(exclude_dir in file_path.parts for exclude_dir in exclude_dirs):
            return True
        # Specifically exclude src/components/ui
        if "src" in file_path.parts and "components" in file_path.parts and "ui" in file_path.parts:
            return True
        return False
    
    def get_files_by_pattern(patterns):
        files = []
        for pattern in patterns:
            files.extend(project_root.glob(pattern))
        return [f for f in files if f.is_file() and not should_exclude(f)]
    
    with open(output_file, "w", encoding="utf-8") as out:
        out.write("# LionAGI Consultation Site - Complete Codebase Extract\n")
        out.write("# Generated for AI code quality evaluation\n\n")
        
        # Project structure overview
        out.write("## Project Structure\n")
        for root, dirs, files in os.walk(project_root):
            # Skip excluded directories
            dirs[:] = [d for d in dirs if d not in exclude_dirs]
            # Also skip src/components/ui specifically
            if "components" in os.path.basename(root) and "ui" in dirs:
                dirs.remove("ui")
            
            level = root.replace(str(project_root), '').count(os.sep)
            indent = ' ' * 2 * level
            out.write(f"{indent}{os.path.basename(root)}/\n")
            subindent = ' ' * 2 * (level + 1)
            for file in files:
                if not file.startswith('.') and any(file.endswith(ext) for ext in ['.tsx', '.ts', '.css', '.json', '.js', '.html']):
                    out.write(f"{subindent}{file}\n")
        out.write("\n" + "="*80 + "\n\n")
        
        # Extract files by category
        for category, patterns in file_patterns.items():
            out.write(f"## {category}\n\n")
            files = get_files_by_pattern(patterns)
            
            if not files:
                out.write(f"No {category.lower()} files found.\n\n")
                continue
                
            for file_path in sorted(files):
                relative_path = file_path.relative_to(project_root)
                out.write(f"### File: {relative_path}\n")
                out.write(f"```{file_path.suffix[1:] if file_path.suffix else 'text'}\n")
                
                try:
                    content = file_path.read_text(encoding="utf-8")
                    out.write(content)
                except Exception as e:
                    out.write(f"Error reading file: {e}")
                
                out.write("\n```\n\n")
            
            out.write("-" * 60 + "\n\n")
    
    print(f"✅ Code extracted to: {output_file}")
    print(f"📊 File size: {output_file.stat().st_size / 1024:.1f} KB")

if __name__ == "__main__":
    extract_code()