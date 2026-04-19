#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from setuptools import find_packages, setup

if __name__ == "__main__":
    setup(
        packages=find_packages(),
        include_package_data=False,
        package_data={
            "mathics_django": [
                "autoload/settings.m",
                "doc/",
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
