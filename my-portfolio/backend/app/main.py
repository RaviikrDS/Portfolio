"""
Application Entry Point.
"""

from fastapi import FastAPI
from mangum import Mangum


from contextlib import asynccontextmanager

from app.api.router import api_router
from app.core.logger import logger
from app.core.settings import settings
from app.exceptions.handlers import register_exception_handlers
from app.middleware.cors import register_cors
from app.middleware.logging import LoggingMiddleware
from app.middleware.request_id import RequestIDMiddleware

@asynccontextmanager
async def lifespan(app: FastAPI):

    logger.info("=" * 60)
    logger.info("%s started", settings.APP_NAME)
    logger.info("Environment : %s", settings.APP_ENV)
    logger.info("Version     : %s", settings.APP_VERSION)
    logger.info("=" * 60)

    yield

    logger.info("Application shutdown.")

# ==========================================================
# FastAPI Application
# ==========================================================

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
    lifespan=lifespan,
)


# ==========================================================
# Middleware
# ==========================================================

app.add_middleware(RequestIDMiddleware)
app.add_middleware(LoggingMiddleware)

register_cors(app)

# ==========================================================
# Exception Handlers
# ==========================================================

register_exception_handlers(app)

# ==========================================================
# API Routes
# ==========================================================

app.include_router(api_router)


# ==========================================================
# AWS Lambda Handler
# ==========================================================

handler = Mangum(app)