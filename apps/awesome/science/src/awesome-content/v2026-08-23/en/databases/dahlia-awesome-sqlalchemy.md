---
title: "Awesome SQLAlchemy"
description: "SQLAlchemy extensions and tools for migrations, search, web integration, testing, profiling, and visualization."
licenseSource: "github-dahlia-awesome-sqlalchemy-readme-rst"
---

# Awesome SQLAlchemy

SQLAlchemy is a Python SQL toolkit and ORM. Find extensions for data structures, data types, migrations, search, and web frameworks, along with testing, profiling, and visualization tools.

## Data Structures

- [bemi-sqlalchemy](https://github.com/BemiHQ/bemi-sqlalchemy) - Automatic data change tracking for SQLAlchemy.
  - Automatically tracks PostgreSQL changes with application-specific context.
  - The source claims 100% reliable capture of changes, including direct SQL executed outside the application.
  - The source states that it does not affect runtime performance or database workload.
  - Works without changing table structures, rewriting code, or creating heavy database triggers.
  - Integrates with FastAPI.

- [SQLAlchemy-Continuum](https://sqlalchemy-continuum.readthedocs.io/) - Versioning and auditing extension for SQLAlchemy.
  - Creates versions for inserts, deletes, and updates.
  - Does not store updates that change nothing.
  - Supports Alembic migrations.
  - Can restore an object's data and all its relationships at a given transaction, even if the object was deleted.
  - Transactions can be queried afterwards with SQLAlchemy query syntax.
  - Finds records changed in a given transaction.
  - Temporal relationship reflection: versioned objects expose the parent object's relationships as they were at that point in time.
  - Supports PostgreSQL native versioning based on triggers.

- [sqlalchemy_mptt](https://sqlalchemy-mptt.readthedocs.io/) - Implements MPTT (modified preorder tree traversal) with SQLAlchemy models and trees of model instances, like [django-mptt](https://github.com/django-mptt/django-mptt/).

- [SQLAlchemy-ORM-tree](https://sqlalchemy-orm-tree.readthedocs.io/) - Implements the nested-set / modified preorder tree traversal technique for storing hierarchical data in relational databases through SQLAlchemy.

- [vdm](https://github.com/okfn/vdm) - Versioned domain model: a Python library for database revisioning and versioning.

## Data Types

- [SQLAlchemy-Enum34](https://github.com/spoqa/sqlalchemy-enum34) - SQLAlchemy type for storing standard `enum.Enum` values.

- [SQLAlchemy-Utc](https://github.com/spoqa/sqlalchemy-utc) - SQLAlchemy type for storing timezone-aware `datetime.datetime` values.

- [SQLAlchemy-Utils](https://sqlalchemy-utils.readthedocs.io/) - Utility functions, data types, and helpers for SQLAlchemy.
  - Listeners.
  - Data types, including ChoiceType, CountryType, JSONType, URLType, and UUIDType.
  - Range data types.
  - Aggregated attributes.
  - Generates decorator.
  - Generic relationships.
  - Database helpers: create_database and drop_database.
  - Foreign key helpers.
  - ORM helpers.
  - Utility classes.
  - Model mixins: Timestamp for creation and update times.

## Database Migration Tools

- [Alembic](https://alembic.readthedocs.io/) - A lightweight database migration tool for Python's SQLAlchemy Database Toolkit.

- [alembic-git-revisions](https://github.com/Mergifyio/alembic-git-revisions) - Derives Alembic migration order from Git commit history instead of a hardcoded `down_revision`. The source describes this as avoiding migration collisions when parallel branches merge and the `Multiple head revisions are present` error.

- [sqlalchemy-migrate](https://sqlalchemy-migrate.readthedocs.io/) - Inspired by Ruby on Rails migrations, SQLAlchemy Migrate handles database schema changes in SQLAlchemy projects.

## Dialects

- [Dialect documentation](https://docs.sqlalchemy.org/en/latest/dialects/)

- [redshift_sqlalchemy](https://github.com/binarydud/redshift_sqlalchemy) - [Amazon Redshift](https://aws.amazon.com/redshift/) dialect for SQLAlchemy.

- [sphinxalchemy](https://sphinxalchemy.readthedocs.io/) - A SQLAlchemy dialect for connecting to the [Sphinx](https://sphinxsearch.com/) search engine through SphinxQL.

- [GINO](https://github.com/python-gino/gino) - An asynchronous PostgreSQL dialect for [asyncpg](https://github.com/MagicStack/asyncpg), with SQLAlchemy Core support and its own asynchronous ORM interface.

## Documentation

- [SQLAlchemy documentation](https://docs.sqlalchemy.org/en/latest/)

- [Introduction](https://docs.sqlalchemy.org/en/latest/intro.html)

- [Core tutorial](https://docs.sqlalchemy.org/en/latest/core/tutorial.html)

- [ORM tutorial](https://docs.sqlalchemy.org/en/latest/orm/tutorial.html)

- [Glossary](https://docs.sqlalchemy.org/en/latest/glossary.html)

## File and Image Attachments

- [filedepot](https://depot.readthedocs.io/) - DEPOT stores and serves files in web applications. It integrates with SQLAlchemy through custom model field types for files attached to ORM documents.

- [SQLAlchemy-ImageAttach](https://sqlalchemy-imageattach.readthedocs.io/) - A SQLAlchemy extension for attaching images to entity objects.

- [sqlalchemy-media](https://github.com/pylover/sqlalchemy-media) - Based on [SQLAlchemy-ImageAttach](https://sqlalchemy-imageattach.readthedocs.io/), using JSON types instead of relations and SQLAlchemy's mutable facility. Supports multiple stores per context.

## Forms and Data Validations

- [ColanderAlchemy](https://github.com/stefanofontanelli/ColanderAlchemy) - Generates [Colander](https://docs.pylonsproject.org/projects/colander/) schemas from SQLAlchemy mapped classes. The schemas work with libraries such as [Deform](https://docs.pylonsproject.org/projects/deform/), avoiding duplicate schema definitions.

- [Flask-Validator](https://flask-validator.readthedocs.io/) - A data validator for Flask and SQLAlchemy that uses SQLAlchemy event listeners at the model level to prevent invalid column data.

- [FormAlchemy](https://github.com/FormAlchemy/formalchemy) - Generates HTML input fields from a model, reducing boilerplate. It inspects model properties to produce HTML suited to the application.

- [WTForms-Alchemy](https://wtforms-alchemy.readthedocs.io/) - A [WTForms](https://wtforms.readthedocs.io/) extension toolkit for creating model-based forms, influenced by Django ModelForm.

- [Sprox](https://sprox.org/) - Creates automatically generated, customizable, validated forms. Table and record viewers help display content, and widgets can be populated with customizable data.

## Full-text Searching

- [SQLAlchemy-Searchable](https://sqlalchemy-searchable.readthedocs.io/) - Full-text searchable SQLAlchemy models. Supports PostgreSQL only.

- [SQLAlchemy-FullText-Search](https://github.com/mengzhuo/sqlalchemy-fulltext-search) - Full-text search with MySQL and SQLAlchemy.

## GIS and Spatial Databases

- [GeoAlchemy](https://geoalchemy.readthedocs.io/) - SQLAlchemy extensions for spatial databases. The fixed source lists [PostGIS](https://postgis.net/), [Spatialite](https://www.gaia-gis.it/gaia-sins/), MySQL, Oracle, and MS SQL Server 2008 as supported systems.

- [GeoAlchemy 2](https://geoalchemy-2.readthedocs.io/) - SQLAlchemy extensions for spatial databases, focused on [PostGIS](https://postgis.net/). The source lists support for PostGIS 1.5, PostGIS 2, and [Spatialite](https://www.gaia-gis.it/gaia-sins/); Spatialite needs specific application-side configuration. It aims to simplify usage and maintenance compared with [GeoAlchemy](https://geoalchemy.readthedocs.io/).

## Vector Search

- [pgvector-python](https://github.com/pgvector/pgvector-python) - Extends SQLAlchemy with native pgvector similarity queries.

- [pgai](https://github.com/timescale/pgai/blob/main/docs/vectorizer/python-integration.md) - Creates vector embeddings for SQLAlchemy models and manages synchronization, using PostgreSQL and pgvector.

## Internationalizations

- [SQLAlchemy-i18n](https://sqlalchemy-i18n.readthedocs.io/) - Internationalization extension for SQLAlchemy models.
  - Stores translations in separate tables.
  - Derives translation table structures from the parent model's table structure.
  - Supports forcing a specified locale.
  - Uses proxy dictionaries and other SQLAlchemy features for performance optimization.

## Profilers

- [flask_debugtoolbar](https://github.com/flask-debugtoolbar/flask-debugtoolbar) - Debug toolbar with SQLAlchemy query information for Flask.

- [pyramid_debugtoolbar](https://github.com/Pylons/pyramid_debugtoolbar) - Debug toolbar with SQLAlchemy query information for Pyramid.

- [SQLTap](https://github.com/inconshreveable/sqltap) - Profiles and inspects the SQLAlchemy queries issued by an application.
  - Counts executions of a SQL query.
  - Measures time spent in SQL queries.
  - Locates where the application issues SQL queries.

- [nplusone](https://github.com/jmcarp/nplusone) - Automatically detects n+1 query problems in SQLAlchemy and other Python ORMs, including unnecessary queries from lazy loading and unused eager loading. Integrates with Flask-SQLAlchemy.

## Query helpers

- [sqlakeyset](https://github.com/djrobstep/sqlakeyset) - Keyset-based paging for SQLAlchemy ORM and Core. The source reports tests with PostgreSQL and MariaDB/MySQL, and expects other SQLAlchemy-supported databases to work if they support `row(` syntax.

## Recipes

- [SQLAlchemy usage recipes](https://github.com/sqlalchemy/sqlalchemy/wiki/UsageRecipes)

## Serialization and deserialization

- [marshmallow-sqlalchemy](https://marshmallow-sqlalchemy.readthedocs.io/) - SQLAlchemy integration with the [marshmallow](https://marshmallow.readthedocs.io/) serialization and deserialization library.

- [pydantic](https://github.com/samuelcolvin/pydantic) - Data parsing and validation using Python type hints.

- [sqlalchemy-dict](https://github.com/meyt/sqlalchemy-dict) - A SQLAlchemy extension for interacting with models through Python dictionaries.

## Testing

- [charlatan](https://github.com/uber/charlatan) - Fixture management for SQLAlchemy and other systems.

- [factory_boy](https://github.com/FactoryBoy/factory_boy) - Generates fake data and random fixtures for tests in SQLAlchemy and other Python ORM systems.

- [mixer](https://github.com/klen/mixer) - Generates fake data and random fixtures for tests in SQLAlchemy and other Python ORM systems.

- [pytest-mrt](https://github.com/croc100/pytest-mrt) - A pytest plugin for checking whether Alembic migrations are safely reversible. Runs actual upgrade/downgrade cycles with real data and statically analyzes migration files.

## Thin Abstractions

- [Dataset](https://dataset.readthedocs.io/) - SQL data handling in Python, including implicit table creation, bulk loading, transactions, and freezing data to CSV and JSON flat files.

- [rdflib-sqlalchemy](https://github.com/RDFLib/rdflib-sqlalchemy) - An [RDFLib](https://github.com/RDFLib/rdflib) store with SQLAlchemy dbapi as its backend.

- [PugSQL](https://pugsql.org/) - Loads and executes parameterized queries stored in files.

- [SQLSoup](https://sqlsoup.readthedocs.io/) - Maps Python objects to relational database tables without declarative code. Built on SQLAlchemy ORM, with a minimal interface to an existing database.

- [SQLModel](https://sqlmodel.tiangolo.com/) - Interacts with SQL databases through Python objects and type annotations, using Pydantic and SQLAlchemy.

- [Zillion](https://totalhack.github.io/zillion/) - A free, open data warehousing and dimensional modeling tool. Combines and analyzes multiple data sources through an API, generates SQL, and connects to existing database infrastructure through SQLAlchemy.

## Vendor-specific Extensions

### PostgreSQL

- [Flask-SQLAlchemy-PGEvents](https://github.com/shawalli/flask-sqlalchemy-pgevents) - A Flask extension using SQLAlchemy and [psycopg2-pgevents](https://github.com/shawalli/psycopg2-pgevents) for event listeners tied to database-layer triggers.

- [sqlalchemy-crosstab-postgresql](https://github.com/makmanalp/sqlalchemy-crosstab-postgresql) - SQLAlchemy syntax for PostgreSQL's `crosstab()` tablefunc (pivot tables).

- [sqlalchemy-postgres-copy](https://github.com/jmcarp/sqlalchemy-postgres-copy) - A wrapper for PostgreSQL `COPY` with SQLAlchemy, enabling efficient bulk data imports and exports.

## Visualizations

- [sadisplay](https://bitbucket.org/estin/sadisplay) - Describes SQLAlchemy schemas and displays raw database tables through reflection.

- [sqlalchemy_schemadisplay](https://github.com/fschulze/sqlalchemy_schemadisplay) - Generates images from SQLAlchemy models.

- [eralchemy](https://github.com/Alexis-benoist/eralchemy) - Generates entity-relationship (ER) diagrams from databases or SQLAlchemy models.

- [paracelsus](https://github.com/tedivm/paracelsus) - A CLI and library for generating Mermaid and DOT diagrams from SQLAlchemy models and inserting them into documentation.

## Web

### Framework Integrations

- [bottle-sqlalchemy](https://github.com/iurisilvio/bottle-sqlalchemy) - A [Bottle](https://bottlepy.org/) plugin for managing SQLAlchemy sessions in an application.

- [filteralchemy](https://github.com/jmcarp/filteralchemy) - A declarative query builder that generates filter parameters from models and parses request parameters with [marshmallow-sqlalchemy](https://marshmallow-sqlalchemy.readthedocs.io/) and [webargs](https://github.com/marshmallow-code/webargs).

- [Flask-SQLAlchemy](https://pythonhosted.org/Flask-SQLAlchemy/) - A [Flask](https://palletsprojects.com/p/flask/) extension that adds SQLAlchemy support to applications.

- [Flask-Admin](https://github.com/flask-admin/flask-admin) - An administration interface framework for [Flask](https://palletsprojects.com/p/flask/), with scaffolding for SQLAlchemy, MongoEngine, pymongo, and Peewee.

- [pyramid_sqlalchemy](https://pyramid-sqlalchemy.readthedocs.io/) - SQLAlchemy integration for [Pyramid](https://trypyramid.com/) applications.

- [pyramid_restler](https://github.com/wylee/pyramid_restler) - A toolkit with specific design choices for building RESTful web services and applications with Pyramid and SQLAlchemy models.

- [sacrud](https://sacrud.readthedocs.io/) - CRUD interfaces for SQLAlchemy, usable through a [Pyramid](https://trypyramid.com/) extension or on its own. [pyramid_sacrud](https://pyramid-sacrud.readthedocs.io/) allows overrides and flexible customization, similar to `django.contrib.admin`.

- [SQLA-wrapper](https://github.com/jpscaletti/sqla-wrapper) - A lightweight, framework-independent SQLAlchemy wrapper.
  - Does not change SQLAlchemy syntax.
  - Paginates query results.
  - Supports multiple databases at once.

- [zope.sqlalchemy](https://pypi.org/project/zope.sqlalchemy/) - Integrates SQLAlchemy with [Zope](https://www.zope.org/) transaction management through a data manager. It does not define a Zope-specific way to configure engines.

- [context-async-sqlalchemy](https://github.com/krylosov-aa/context-async-sqlalchemy) - Manages engine, session, and transaction lifecycles in asynchronous applications using context, providing access to sessions without manually opening or closing them when unnecessary.

### Other

- [paginate_sqlalchemy](https://github.com/Pylons/paginate_sqlalchemy) - Splits large lists of items into pages for users to browse one at a time.

- [sandman2](https://github.com/jeffknupp/sandman2) - Generates a curl-accessible REST HTTP API with searching and filtering for all database tables, plus an administration UI using Flask-SQLAlchemy and HTTP Basic Authentication.

- [sqlalchemy_mixins](https://github.com/absent1706/sqlalchemy-mixins) - Mixins for Active Record, Django-style queries, nested eager loading, and `__repr__` representations in SQLAlchemy.
