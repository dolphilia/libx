---
title: "nschloe/awesome-scientific-computing"
description: "nschloe/awesome-scientific-computing の定本スナップショット"
licenseSource: "github-nschloe-awesome-scientific-computing-readme-md"
---

# 素晴らしい科学計算 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="https://nschloe.github.io/awesome-scientific-computing/sunglasses.svg" align="right" width="30%">](#readme)

> 科学計算と数値解析に役立つリソース。

科学計算と数値解析は、コンピューターの助けを借りて科学のさまざまな分野における大規模問題を解く手法を提供することを目指す研究分野です。典型的な問題には、常微分方程式・偏微分方程式（ODE、PDE）、その離散化、およびそこから生じる線形代数問題の解法が含まれます。

## 目次

- [基礎線形代数](#basic-linear-algebra)
- [多目的ツールキット](#multi-purpose-toolkits)
- [有限要素](#finite-elements)
- [メッシュ生成](#meshing)
- [データ形式](#data-formats)
- [疎行列線形ソルバー](#sparse-linear-solvers)
- [可視化](#visualization)
- [その他のライブラリとツール](#other-libraries-and-tools)
- [コミュニティ](#community)

## 基礎線形代数

- [BLAS](https://netlib.org/blas/) - 基本的なベクトル・行列演算を実行するための標準的な構成要素。
  (Fortran、パブリックドメイン、[GitHub](https://github.com/Reference-LAPACK/lapack/tree/master/BLAS))
- [OpenBLAS](https://www.openblas.net) - GotoBLAS2を基にした最適化済みBLASライブラリ。
  (CおよびAssembly、BSD、[GitHub](https://github.com/OpenMathLib/OpenBLAS))
- [BLIS](https://github.com/flame/blis) - 高性能なBLAS風の密行列線形代数ライブラリ。
  (C、BSD、GitHub)
- [LAPACK](https://netlib.org/lapack/) - 線形方程式系、線形最小二乗、固有値問題などを解くためのルーチン。
  (Fortran、BSD、[GitHub](https://github.com/Reference-LAPACK/lapack))
- [Eigen](https://libeigen.gitlab.io/) - 線形代数のためのC++テンプレートライブラリ。
  (C++、MPL 2、[GitLab](https://gitlab.com/libeigen/eigen))
- [Ginkgo](https://ginkgo-project.github.io/) - 疎行列系に焦点を当てた高性能manycore線形代数ライブラリ。
  (C++、BSD、[GitHub](https://github.com/ginkgo-project/ginkgo))
- [blaze](https://bitbucket.org/blaze-lib/blaze) - 密・疎算術向けの高性能C++数学ライブラリ。
  (C++、BSD、Bitbucket)

## 多目的ツールキット

- [PETSc](https://petsc.org/release/) - PDEでモデル化された科学アプリケーションを並列に解くためのツール。
  (C、2条項BSD、[GitLab](https://gitlab.com/petsc/petsc))
- [DUNE Numerics](https://www.dune-project.org) - 格子ベース手法でPDEを解くためのツールボックス。
  (C++、GPL 2、[GitLab](https://gitlab.dune-project.org/core/))
- [SciPy](https://scipy.org) - 統計、最適化、積分、線形代数などのPythonモジュール。
  (Python、主にBSD、[GitHub](https://github.com/scipy/scipy/))
- [NumPy](https://numpy.org/) - Pythonで科学計算を行うための基礎パッケージ。
  (Python、BSD、[GitHub](https://github.com/numpy/numpy))
- [DifferentialEquations.jl](https://docs.sciml.ai/DiffEqDocs/stable/) - さまざまな種類の微分方程式を数値的に解くためのツールボックス。 (Julia、MIT、[GitHub](https://github.com/SciML/DifferentialEquations.jl))

## 有限要素

- [FEniCS](https://fenicsproject.org) - PythonとC++でPDEを解くための計算プラットフォーム。
  (C++/Python、LGPL 3、[GitHub](https://github.com/FEniCS)/[Bitbucket](https://bitbucket.org/fenics-project/))
- [libMesh](https://libmesh.github.io) - 非構造離散化を用いたPDEの数値シミュレーション用フレームワーク。
  (C++、LGPL 2.1、[GitHub](https://github.com/libMesh/libmesh))
- [deal.II](https://dealii.org) - 有限要素コードの作成を支援するソフトウェアライブラリ。
  (C++、LGPL 2.1、[GitHub](https://github.com/dealii/dealii))
- [Netgen/NGSolve](https://ngsolve.org) - 高性能なマルチフィジクス有限要素ソフトウェア。
  (C++、LGPL 2.1、[GitHub](https://github.com/NGSolve/netgen))
- [Firedrake](https://www.firedrakeproject.org) - 有限要素法によるPDE解法の自動化システム。
  (Python、LGPL 3、[GitHub](https://github.com/firedrakeproject/firedrake))
- [MOOSE](https://mooseframework.inl.gov/) - マルチフィジクスのオブジェクト指向シミュレーション環境。
  (C++、LGPL 2.1、[GitHub](https://github.com/idaholab/moose))
- [MFEM](https://mfem.org) - 有限要素法のための自由で軽量かつスケーラブルなC++ライブラリ。
  (C++、BSD-3-Clause、[GitHub](https://github.com/mfem/mfem))
- [SfePy](https://sfepy.org) - Pythonによるシンプルな有限要素。
  (Python、BSD、[GitHub](https://github.com/sfepy/sfepy))
- [FreeFEM](https://freefem.org) - 高水準のマルチフィジクス・マルチメッシュ有限要素言語。
  (C++、LGPL、[GitHub](https://github.com/FreeFem))
- [libceed](https://libceed.readthedocs.io/en/latest/index.html) - 効率的で拡張可能な離散化のためのコード。
  (C、2条項BSD、[GitHub](https://github.com/CEED/libCEED))
- [scikit-fem](https://github.com/kinnala/scikit-fem) - シンプルな有限要素アセンブラ。
  (Python、BSD/GPL、GitHub)

## メッシュ生成

### 三角形・四面体メッシュ生成

- [Gmsh](https://gmsh.info) - 前処理・後処理機能を備えた三次元有限要素メッシュジェネレーター。
  (C++、GPL、[GitLab](https://gitlab.onelab.info/gmsh/gmsh))
- [pygmsh](https://github.com/nschloe/pygmsh) - Gmsh用Pythonインターフェース。
  (Python、GPL 3、GitHub)
- [MeshPy](https://mathema.tician.de/software/meshpy/) - 高品質な三角形・四面体メッシュ生成。
  (Python、MIT、[GitHub](https://github.com/inducer/meshpy))
- [CGAL](https://www.cgal.org) - 計算幾何学向けアルゴリズム。
  (C++、混在LGPL/GPL、[GitHub](https://github.com/CGAL/cgal))
- [pygalmesh](https://github.com/meshpro/pygalmesh) - CGALの3Dメッシュ生成機能用Pythonインターフェース。
  (Python、GPL 3、GitHub)
- [TetGen](https://www.wias-berlin.de/software/index.jsp?id=TetGen) - 高品質な四面体メッシュジェネレーターおよび3D Delaunay三角分割器。
  (C++、AGPLv3)
- [Triangle](https://www.cs.cmu.edu/~quake/triangle.html) - 二次元の高品質メッシュジェネレーターおよびDelaunay三角分割器。
  (C、_非フリーソフトウェア_)
- [distmesh](https://persson.berkeley.edu/distmesh/) - 非構造三角形・四面体メッシュのシンプルなジェネレーター。
  (MATLAB、GPL 3)
- [trimesh](https://trimesh.org) - 水密表面を重視して三角形メッシュを読み込み・使用するライブラリ。
  (Python、MIT、[GitHub](https://github.com/mikedh/trimesh))
- [dmsh](https://github.com/meshpro/dmsh) - distmeshに着想を得た、非構造三角形メッシュ用のシンプルなジェネレーター。
  (Python、プロプライエタリ、GitHub)
- [TetWild](https://arxiv.org/abs/1908.03581) - 三角形表面メッシュから四面体メッシュを生成。
  (C++、GPL 3、[GitHub](https://github.com/Yixin-Hu/TetWild))
- [TriWild](https://cims.nyu.edu/gcl/papers/2019-TriWild.pdf) - 曲線制約付きの堅牢な三角分割。
  (C++、MPL 2、[GitHub](https://github.com/wildmeshing/TriWild))
- [fTetWild](https://arxiv.org/abs/1908.03581) - TetWildと同じだが、より高速。
  (C++、MPL 2、[GitHub](https://github.com/wildmeshing/fTetWild))
- [SeismicMesh](https://github.com/krober10nd/SeismicMesh) - 細長要素除去を伴う並列2D/3D三角形・四面体メッシュ生成。
  (PythonおよびC++、GPL 3、GitHub)

### 四角形・六面体メッシュ生成

- [QuadriFlow](https://stanford.edu/~jingweih/papers/quadriflow/) - 三角分割からスケーラブルかつ堅牢に四角形分割を行う。
  (C++、BSD、[GitHub](https://github.com/hjwdzh/QuadriFlow))

### メッシュツール

- [meshio](https://github.com/nschloe/meshio) - 各種メッシュ形式のI/Oとファイル変換。
  (Python、MIT、GitHub)
- [MOAB](https://sigma.mcs.anl.gov/moab-library/) - メッシュデータの表現と評価。
  (C++、主にLGPL 3、[Bitbucket](https://bitbucket.org/fathomteam/moab/))
- [optimesh](https://github.com/meshpro/optimesh) - 三角形メッシュの平滑化。
  (Python、プロプライエタリ、GitHub)
- [pmp-library](https://www.pmp-library.org/) - 多角形メッシュ処理ライブラリ。
  (C++、雇用主免責付きMIT、[GitHub](https://github.com/pmp-library/pmp-library/))
- [Mmg](https://www.mmgtools.org/) - 再メッシュのための堅牢なオープンソース・マルチディシプリナリソフトウェア。
  (C、LGPL 3、[GitHub](https://github.com/MmgTools/mmg))
- [meshplex](https://github.com/meshpro/meshplex) - 単体メッシュ向けの高速ツール。
  (Python、プロプライエタリ、GitHub)

## データ形式

- [NetCDF](https://www.unidata.ucar.edu/software/netcdf) - 配列指向の科学データ向けソフトウェアライブラリおよびデータ形式。
  (C/C++/Fortran/Java/Python、[カスタムオープンソース
  ライセンス](https://www.unidata.ucar.edu/software/netcdf/licensing)、
  [GitHub](https://github.com/Unidata/netcdf-c/))
- [HDF5](https://www.hdfgroup.org/solutions/hdf5/) - データを保存・管理するためのデータモデル、ライブラリ、ファイル形式。
  (C/Fortran、BSD、[GitHub](https://github.com/HDFGroup/hdf5))
- [XDMF](https://xdmf.org/) - 高性能計算コード由来のデータに向けた拡張可能なデータモデル・形式。
  (C++、[GitLab](https://gitlab.kitware.com/xdmf/xdmf))
- [Zarr](https://zarr.readthedocs.io/en/stable/) - チャンク化・圧縮されたN次元配列を保存する形式。
  (Python、MIT、[GitHub](https://github.com/zarr-developers/zarr-python))

## 疎行列線形ソルバー

- [SuperLU](https://portal.nersc.gov/project/sparse/superlu/) - 大規模・疎・非対称な線形方程式系の直接解法。
  (C、主にBSD、[GitHub](https://github.com/xiaoyeli/superlu))
- [PyAMG](https://pyamg.readthedocs.io/en/latest/) - Pythonの代数的マルチグリッドソルバー。
  (Python、MIT、[GitHub](https://github.com/pyamg/pyamg))
- [hypre](https://computing.llnl.gov/projects/hypre-scalable-linear-solvers-multigrid-methods) - 高性能な前処理器・ソルバーのライブラリ。
  (C、Apache 2.0/MIT、[GitHub](https://github.com/hypre-space/hypre))

## 可視化

- [ParaView](https://www.paraview.org) - VTKに基づくマルチプラットフォームのデータ分析・可視化アプリケーション。
  (C++、BSD、[GitLab](https://gitlab.kitware.com/paraview/paraview))
- [VTK](https://vtk.org/) - 画像を処理し、3Dコンピューターグラフィックスを作成する。
  (C++、BSD、[GitLab](https://gitlab.kitware.com/vtk/vtk))
- [Mayavi](https://docs.enthought.com/mayavi/mayavi/) - Pythonで科学データの3D可視化とプロットを行う。
  (Python、BSD、[GitHub](https://github.com/enthought/mayavi))
- [Polyscope](https://polyscope.run/) - 3D幾何処理用のビューアーおよびユーザーインターフェース。
  (C++、MIT、[GitHub](https://github.com/nmwsharp/polyscope))
- [PyVista](https://docs.pyvista.org/) - VTK向けの合理化されたインターフェースによる3Dプロットとメッシュ解析。
  (Python、MIT、[GitHub](https://github.com/pyvista/pyvista))
- [vedo](https://vedo.embl.es) - VTKに基づく3Dオブジェクト向け科学解析・可視化ライブラリ。
  (Python、MIT、[GitHub](https://github.com/marcomusy/vedo))
- [yt](https://yt-project.org/) - 体積データの解析・可視化ツールキット。
  (Python、BSD、[GitHub](https://github.com/yt-project/yt))
- [F3D](https://f3d.app/) - 科学可視化ツールを備えたクロスプラットフォーム、高速、ミニマルな3Dビューアー。
  (C++、BSD、[GitHub](https://github.com/f3d-app/f3d))
- [TTK](https://topology-tool-kit.github.io/) - 位相データ解析と可視化。
  (C++/Python、BSD、[GitHub](https://github.com/topology-tool-kit/ttk))
- [morphologica](https://github.com/ABRG-Models/morphologica) - 実行時に数値シミュレーションを可視化する、ヘッダーのみのモダンなOpenGLコード。 (C++、Apache 2.0、GitHub)

## その他のライブラリとツール

- [FFTW](http://www.fftw.org) - 任意の入力サイズ・実数・複素数に対応する、1次元以上の離散フーリエ変換。
  (C、GPL2、[GitHub](https://github.com/FFTW/fftw3))
- [Qhull](http://www.qhull.org) - 凸包、Delaunay三角分割、Voronoi図、点まわりの半空間交差など。
  (C/C++、[カスタムオープンソースライセンス](http://www.qhull.org/COPYING.txt)、
  [GitHub](https://github.com/qhull/qhull/))
- [GSL](https://www.gnu.org/software/gsl/) - 乱数生成器、特殊関数、最小二乗フィッティングなど。
  (C/C++、GPL 3、[Savannah](https://savannah.gnu.org/projects/gsl))
- [OpenFOAM](https://www.openfoam.com) - 自由なオープンソースCFD（計算流体力学）ソフトウェア。
  (C++、GPL 3、[GitHub](https://github.com/OpenFOAM/OpenFOAM-dev))
- [quadpy](https://github.com/sigma-py/quadpy) - Pythonで数値積分（求積・多重積分）を行う。
  (Python、プロプライエタリ、GitHub)
- [FiPy](https://www.ctcms.nist.gov/fipy/) - 有限体積法PDEソルバー。
  (Python、[カスタムオープンソース
  ライセンス](https://www.nist.gov/open/copyright-fair-use-and-licensing-statements-srd-data-software-and-technical-series-publications)、
  [GitHub](https://github.com/usnistgov/fipy))
- [accupy](https://github.com/sigma-py/accupy) - Pythonで正確な和と内積を計算する。
  (Python、GPL 3、GitHub)
- [SLEPc](https://slepc.upv.es) - スケーラブルな固有値問題計算ライブラリ。
  (C、2条項BSD、[GitLab](https://gitlab.com/slepc/slepc))
- [Chebfun](https://www.chebfun.org/) - 約15桁精度で関数を計算する。
  (MATLAB、BSD、[GitHub](https://github.com/chebfun/chebfun))
- [pyMOR](https://pymor.org/) - Pythonによるモデル次数低減。
  (Python、2条項BSD、[GitHub](https://github.com/pymor/pymor/))
- [cvxpy](https://www.cvxpy.org/) - 凸最適化問題のモデリング言語。
  (Python、Apache 2.0、[GitHub](https://github.com/cvxpy/cvxpy))
- [PyWavelets](https://pywavelets.readthedocs.io/en/latest/) - Pythonでウェーブレット変換を行う。
  (Python、MIT、[GitHub](https://github.com/PyWavelets/pywt))
- [NFFT](https://www-user.tu-chemnitz.de/~potts/nfft/) - 非等間隔高速フーリエ変換。
  (C/MATLAB、GPL 2、[GitHub](https://github.com/NFFT/nfft))
- [preCICE](https://precice.org/) - 分割マルチフィジクスシミュレーション（FSI、CHTなど）の結合ライブラリ。
  (C++、LGPL 3、[GitHub](https://github.com/precice/))
- [orthopy](https://github.com/sigma-py/orthopy) - 直交多項式を効率よく計算する。
  (Python、プロプライエタリ、GitHub)
- [pyGAM](https://pygam.readthedocs.io/en/latest/) - Pythonの一般化加法モデル。
  (Python、Apache 2.0、[GitHub](https://github.com/dswah/pyGAM))
- [Dedalus](https://dedalus-project.org/) - スペクトル法で偏微分方程式を解く。
  (Python、GPL 3、[GitHub](https://github.com/DedalusProject/dedalus))
- [PyGMO](https://esa.github.io/pygmo/) - 大規模並列最適化。
  (Python/C++、MPL 2、[GitHub](https://github.com/esa/pygmo2))
- [shenfun](https://shenfun.readthedocs.io/en/latest/) - スペクトルGalerkin法のための高性能Pythonライブラリ。
  (Python、BSD-2、[GitHub](https://github.com/spectralDNS/shenfun))
- [PyDMD](https://github.com/mathLab/PyDMD) - 動的モード分解（DMD）。
  (Python、MIT、GitHub)
- [HPDDM](https://github.com/hpddm/hpddm) - 領域分割法のための高性能統合フレームワーク。
  (C++、LGPL 3、GitHub)

## コミュニティ

- [SciComp StackExchange](https://scicomp.stackexchange.com/) - StackExchangeネットワーク上の計算科学。
- [Wolfgang Bangerth's video class](https://www.math.colostate.edu/~bangerth/videos.html) - MATH 676: 科学計算における有限要素法。
- [Nick Higham's blog](https://nhigham.com/) - 主にMATLABと一般的な計算に関する助言。
- [Nick Trefethen's Video Lectures](https://people.maths.ox.ac.uk/trefethen/videos.html) - 近似理論・実践と科学計算に関する36本のビデオ講義。
- [John D. Cook's blog](https://www.johndcook.com/blog/) - 科学計算の功績。
- [Jack Dongarra's software list](https://netlib.org/utk/people/JackDongarra/la-sw.html) - 線形代数問題の解法に利用できる自由なソフトウェア一覧。
- [NA Digest](https://netlib.org/na-digest-html/) - 数値解析およびその実践者に関するトピックの記事集。
- [Gabriel Peyré on Bluesky](https://bsky.app/profile/gabrielpeyre.bsky.social) - 計算数学について毎日1件投稿。
- [Discord: Numerical Software](https://discord.com/invite/hnTJ5MRX2Y) - 数値ソフトウェアに関するDiscordメッセージングサーバー。
