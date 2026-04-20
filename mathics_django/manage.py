#!/usr/bin/env python
# -*- coding: utf-8 -*-
import argparse
import os
import sys

from django.core.management import execute_from_command_line

# Import the version from your package
try:
    from mathics_django.version import __version__ as mathics_version
except ImportError:
    mathics_version = "unknown"


def main():
    """
    Runs the Mathics3 Webserver with supplied options.
    """
    # Process options
    parser = argparse.ArgumentParser(
        prog="Mathics3Server", description="Run the Mathics3 Django webserver."
    )

    parser.add_argument(
        "--version", action="version", version=f"%(prog)s {mathics_version}"
    )
    parser.add_argument(
        "--debug", action="store_true", help="Set DEBUG to True in settings"
    )
    parser.add_argument(
        "--production", action="store_true", help="Run with Daphne production server"
    )
    parser.add_argument(
        "-p",
        "--port",
        type=str,
        default="8000",
        help="Port to listen on (default: 8000)",
    )
    parser.add_argument(
        "-b",
        "--host",
        type=str,
        default="localhost",
        help="The host address to listen on (default: localhost)",
    )

    # Use parse_known_args so we don't crash on standard Django commands (like 'runserver')
    # If --help or -h is given in sys.argv, this will print help and exit immediately.
    args, unknown = parser.parse_known_args()

    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mathics_django.settings")

    # Handle --debug option
    if args.debug:
        # This overrides settings at runtime by setting an environment variable
        # Ensure your mathics_django/settings.py reads DEBUG from the environment
        os.environ["DEBUG"] = "True"

    # Handle --production ption
    if args.production:
        try:
            # Import and call Daphne's CLI directly
            from daphne.cli import CommandLineInterface

            # The run() method expects a list of arguments starting with the application path
            # Equivalent to: daphne -b args.port -p args.host mathics_django.asgi:application
            CommandLineInterface().run(
                ["mathics_django.asgi:application", "-b", args.host, "-p", args.port]
            )
            return  # Exit after server stops
        except ImportError:
            print(
                "Error: 'daphne' is not installed. Run 'pip install daphne' for production mode."
            )
            sys.exit(1)

    # Fallback to standard Django execution, defaulting to "runserver" commands
    # if --production not provided
    django_args = [sys.argv[0]] + unknown

    # If no command is provided, default to runserver with our port and bind address
    if not unknown:
        django_args.extend(["runserver", f"{args.host}:{args.port}"])

    execute_from_command_line(django_args)


if __name__ == "__main__":
    main()
