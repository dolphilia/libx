"""Replay fixed yyjson originals and saved Japanese bodies using Python standard library."""
import argparse,subprocess,sys
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('--notes',type=Path,default=Path(__file__).resolve().parents[2]/'docs/notes/document-import/yyjson/v0-13-0');p.add_argument('--output',type=Path,required=True);a=p.parse_args();subprocess.run([sys.executable,str(a.notes/'regeneration/regenerate.py'),'--output',str(a.output)],check=True)
