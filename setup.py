#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from setuptools import find_packages, setup

if __name__ == "__main__":
    # TODO: move setup info into pyproject.toml
    # However by having this here, we can *debug* this stuff easier.
    setup(
        packages=find_packages(),
        # Below, we include set include_package_data to False *and*
        # include the python files explicitly found in find_packaages
        # above.  Without this Python warns that it can't find
        # "autoload", "doc" and others when building a wheel.
        include_package_data=False,
        package_data={
            "mathics_django": [
                "autoload/settings.m",
                "doc/*.py",
                "doc/*.pcl",
                "web/*.py",
                "web/controllers/*.py",
                "web/media/css/*.css",
                "web/media/doc/*.png",
                "web/media/img/*",
                "web/media/img/favicons/*",
                "web/media/fonts/*",
                "web/media/js/*.js",
                "web/media/js/**/*.js",
                "web/media/js/mathics-threejs-backend/**/*",
                "web/migrations/*.py",
                "web/templates/**/*.html",
                "web/templatetags/*.py",
                "web/media/js/mathjax/**/*",
            ]
        },
    )
