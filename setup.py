#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from setuptools import setup

if __name__ == "__main__":
    setup(
        packages=["mathics_django"],
        include_package_data=True,
        package_data={
            "mathics_django": [
                "autoload/*.m",
                "doc/*.pcl",
                "web/media/css/*.css",
                "web/media/doc/*.png",
                "web/media/img/*",
                "web/media/img/favicons/*",
                "web/media/fonts/*",
                "web/media/js/*.js",
                "web/media/js/**/*.js",
                "web/media/js/mathics-threejs-backend/**/*",
                "web/templates/**/*.html",
                "web/media/js/mathjax/**/*",
            ]
        },
    )
