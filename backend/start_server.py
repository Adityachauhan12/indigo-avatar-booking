#!/usr/bin/env python3
"""
Simple script to start the FastAPI server
"""
import uvicorn
import os
from main import app

if __name__ == "__main__":
    print("🚀 Starting Vernacular Avatar Booking Backend...")
    print("📍 Server will be available at: http://localhost:8000")
    print("📖 API docs will be available at: http://localhost:8000/docs")
    print("🔄 Press Ctrl+C to stop the server")
    print("-" * 50)
    
    uvicorn.run(
        app, 
        host="0.0.0.0", 
        port=8000,
        reload=True,  # Auto-reload on code changes
        log_level="info"
    )