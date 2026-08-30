---
title: "danielecook/Awesome-Bioinformatics"
description: "バイオインフォマティクスのソフトウェア、ライブラリ、学習資料を集めた厳選リスト"
licenseSource: "github-danielecook-Awesome-Bioinformatics-readme-md"
---

<a id="awesome-bioinformatics"></a>
# Awesome Bioinformatics [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Check URLs](https://github.com/danielecook/Awesome-Bioinformatics/actions/workflows/url-check.yml/badge.svg)](https://github.com/danielecook/Awesome-Bioinformatics/actions/workflows/url-check.yml) [![Generate TOC](https://github.com/danielecook/Awesome-Bioinformatics/actions/workflows/toc.yml/badge.svg)](https://github.com/danielecook/Awesome-Bioinformatics/actions/workflows/toc.yml)

> バイオインフォマティクスは、生物学的データを理解するための手法とソフトウェアツールを開発する学際分野です。— [Wikipedia](https://en.wikipedia.org/wiki/Bioinformatics)

素晴らしいバイオインフォマティクスソフトウェア、リソース、およびライブラリを厳選したリスト。ほとんどがコマンドラインベースであり、無料またはオープンソースです。ぜひ [contribute](https://github.com/danielecook/Awesome-Bioinformatics/blob/86812b12322b1da5df821a2af2649607462633b9/CONTRIBUTING.md)ください！



<a id="table-of-contents"></a>
## 目次

- [Package suites](#package-suites)
- [Data Tools](#data-tools)
  - [Downloading](#downloading)
  - [Compressing](#compressing)
- [Data Processing](#data-processing)
  - [Command Line Utilities](#command-line-utilities)
- [Next Generation Sequencing](#next-generation-sequencing)
  - [Workflow Managers](#workflow-managers)
  - [Pipelines](#pipelines)
  - [Sequence Processing](#sequence-processing)
  - [Data Analysis](#data-analysis)
  - [Sequence Alignment](#sequence-alignment)
    - [Pairwise](#pairwise)
    - [Multiple Sequence Alignment](#multiple-sequence-alignment)
    - [Clustering](#clustering)
  - [Quantification](#quantification)
  - [Variant Calling](#variant-calling)
    - [Structural variant callers](#structural-variant-callers)
  - [BAM File Utilities](#bam-file-utilities)
  - [VCF File Utilities](#vcf-file-utilities)
  - [GFF BED File Utilities](#gff-bed-file-utilities)
  - [Variant Simulation](#variant-simulation)
  - [Variant Prediction/Annotation](#variant-predictionannotation)
  - [Python Modules](#python-modules)
    - [Data](#data)
    - [Tools](#tools)
  - [Assembly](#assembly)
  - [Annotation](#annotation)
- [Long-read sequencing](#long-read-sequencing)
  - [Long-read Assembly](#long-read-assembly)
- [Visualization](#visualization)
  - [Genome Browsers / Gene Diagrams](#genome-browsers--gene-diagrams)
  - [Circos Related](#circos-related)
- [Database Access](#database-access)
- [Resources](#resources)
  - [Becoming a Bioinformatician](#becoming-a-bioinformatician)
  - [Bioinformatics on GitHub](#bioinformatics-on-github)
  - [Sequencing](#sequencing)
  - [RNA-Seq](#rna-seq)
  - [ChIP-Seq](#chip-seq)
  - [YouTube Channels and Playlists](#youtube-channels-and-playlists)
  - [Blogs](#blogs)
  - [Miscellaneous](#miscellaneous)
- [Online networking groups](#online-networking-groups)
- [License](#license)



---

<a id="package-suites"></a>
## パッケージスイート

パッケージセットは、特定の言語やプラットフォーム向けのソフトウェアパッケージとインストールツールをまとめて提供します。バイオインフォマティクスソフトウェアのためのものもいくつかあります。

- **[Bioperl](https://github.com/bioperl/bioperl-live)** - バイオインフォマティクス、ゲノミクス、生命科学向けオープンソースPerlツールの利用者・開発者による国際コミュニティ。 [ [paper-2002](https://doi.org/10.1101%2Fgr.361602) | [web](https://bioperl.org) ]

- **[Bioconductor](https://github.com/Bioconductor)** - 1,500以上のソフトウェアパッケージを含む、ハイスループットゲノムデータの解析・理解のための豊富なツール群。 [ [paper-2004](https://link.springer.com/article/10.1186/gb-2004-5-10-r80) | [web](https://www.bioconductor.org) ]

- **[Biopython](https://github.com/biopython/biopython)** - Pythonで生物学的計算を行うための無料ツール群。クックブック、パッケージング、詳しいドキュメントを備え、[Open Bioinformatics Foundation](http://open-bio.org/)の一部です。NCBIデータベースへのAPIアクセスに便利な[Entrez](https://biopython.org/DIST/docs/api/Bio.Entrez-module.html)パッケージも含みます。 [ [paper-2009](https://pubmed.ncbi.nlm.nih.gov/19304878) | [web](https://biopython.org) ]

- **[Bioconda](https://github.com/bioconda)** - A channel for the [conda package manager](http://conda.pydata.org/docs/intro.html) バイオインフォマティクスソフトウェアに特化した。3000以上のインストール可能（ `conda install` 付き）バイオインフォマティクスパッケージを含むリポジトリを提供。 [ [paper-2018](https://pubmed.ncbi.nlm.nih.gov/29967506) | [web](https://bioconda.github.io) ]

- **[BioJulia](https://github.com/BioJulia)** - Julia向けのバイオインフォマティクス／計算生物学基盤。 [ [web](https://biojulia.net) ]
- **[Rust-Bio](https://github.com/rust-bio/rust-bio)** - バイオインフォマティクスに有用なアルゴリズムとデータ構造のRust実装。 [ [paper-2016](http://bioinformatics.oxfordjournals.org/content/early/2015/10/06/bioinformatics.btv573.short?rss=1) ]
- **[SeqAn](https://github.com/seqan/seqan3)** - The modern C++ library for sequence analysis.
- **[(Poly)merase](https://github.com/TimothyStiles/poly)** - A Go library and command line utility for engineering organisms.
- **[Biocaml](https://github.com/biocaml/biocaml)** - Biocaml aims to be a high-performance user-friendly library for Bioinformatics.
- **[Biojava](https://github.com/biojava/biojava)** - Java framework for processing biological data.

<a id="data-tools"></a>
## データツール

<a id="downloading"></a>
### ダウンロード
- **[GGD](https://github.com/gogetdata/ggd-cli)** - Go Get Data; A command line interface for obtaining genomic data. [ [web](https://gogetdata.github.io) ]
- **[SRA-Explorer](https://github.com/ewels/sra-explorer)** - Easily get SRA download links and other information. [ [web](https://sra-explorer.info) ]

<a id="compressing"></a>
### 圧縮
- **[Genozip](https://github.com/divonlan/genozip)** - A compressor of common genomic file formats (BAM, CRAM, FASTQ, VCF etc). [ [web](https://genozip.com/?utm_source=Awesome-Bioinformatics) | [paper-2021](https://www.researchgate.net/publication/349347156_Genozip_-_A_Universal_Extensible_Genomic_Data_Compressor) ]

<a id="data-processing"></a>
## データ処理

<a id="command-line-utilities"></a>
### コマンドラインユーティリティ

- **[Bioinformatics One Liners](https://github.com/stephenturner/oneliners)** - Git repo of useful single line commands.
- **[BioNode](https://github.com/bionode/bionode)** - Modular and universal bioinformatics, Bionode provides pipeable UNIX command line tools and JavaScript APIs for bioinformatics analysis workflows. [ [web](http://bionode.io) ]
- **[bioSyntax](https://github.com/bioSyntax/bioSyntax)** - Syntax Highlighting for Computational Biology file formats (SAM, VCF, GTF, FASTA, PDB, etc...) in vim/less/gedit/sublime. [ [paper-2018](https://pubmed.ncbi.nlm.nih.gov/30134911) | [web](http://www.bioSyntax.org) ]
- **[CSVKit](https://github.com/wireservice/csvkit)** - Utilities for working with CSV/Tab-delimited files. [ [web](https://csvkit.readthedocs.io/en/latest) ]
- **[csvtk](https://github.com/shenwei356/csvtk)** - Another cross-platform, efficient, practical and pretty CSV/TSV toolkit. [ [web](https://bioinf.shenwei.me/csvtk) ]
- **[datamash](https://git.savannah.gnu.org/gitweb/?p=datamash.git)** - Data transformations and statistics. [ [web](http://www.gnu.org/software/datamash) ]
- **[easy_qsub](https://github.com/shenwei356/easy_qsub)** - Easily submitting PBS jobs with script template. Multiple input files supported.
- **GNU Parallel** - General parallelizer that runs jobs in parallel on a single multi-core machine. [Here](https://www.biostars.org/p/63816/) GNU Parallelを使用したいくつかの例スクリプト。 [ [web](http://www.gnu.org/software/parallel) ]
- **[grabix](https://github.com/arq5x/grabix)** - A wee tool for random access into BGZF files.
- **[grepq](https://github.com/Rbfinch/grepq)** - Fast FASTQ filtering by matching reads against one or more regex patterns.
- **[gsort](https://github.com/brentp/gsort)** - Sort genomic files according to a specified order.
- **[tabix](https://github.com/samtools/tabix)** - Table file index. [ [paper-2011](https://pubmed.ncbi.nlm.nih.gov/21208982) ]
- **[wormtable](https://github.com/wormtable/wormtable)** - Write-once-read-many table for large datasets.
- **[zindex](https://github.com/mattgodbolt/zindex)** - Create an index on a compressed text file.

<a id="next-generation-sequencing"></a>
## 次世代シーケンシング

<a id="workflow-managers"></a>
### ワークフローマネージャー

- **[BigDataScript](https://github.com/pcingola/BigDataScript)** - A cross-system scripting language for working with big data pipelines in computer systems of different sizes and capabilities. [ [paper-2014](https://pubmed.ncbi.nlm.nih.gov/25189778) | [web](https://pcingola.github.io/BigDataScript) ]
- **[Bpipe](https://github.com/ssadedin/bpipe)** - A small language for defining pipeline stages and linking them together to make pipelines. [ [web](http://docs.bpipe.org) ]
- **[Common Workflow Language](https://github.com/common-workflow-language/common-workflow-language)** - a specification for describing analysis workflows and tools that are portable and scalable across a variety of software and hardware environments, from workstations to cluster, cloud, and high performance computing (HPC) environments. [ [web](http://www.commonwl.org) ]
- **[Cromwell](https://github.com/broadinstitute/cromwell)** - A Workflow Management System geared towards scientific workflows. [ [web](https://cromwell.readthedocs.io) ]
- **[Galaxy](https://github.com/galaxyproject)** - a popular open-source, web-based platform for data intensive biomedical research. Has several features, from data analysis to workflow management to visualization tools. [ [paper-2018](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6030816) | [web](https://galaxyproject.org) ]
- **[Nextflow](https://github.com/nextflow-io/nextflow) (recommended)** - A fluent DSL modelled around the UNIX pipe concept, that simplifies writing parallel and scalable pipelines in a portable manner. [ [paper-2018](https://pubmed.ncbi.nlm.nih.gov/29412134) | [web](http://nextflow.io) ]
- **[redun](https://github.com/insitro/redun)** - A python-based workflow manager.
- **[Ruffus](https://github.com/cgat-developers/ruffus)** - Computation Pipeline library for python widely used in science and bioinformatics. [ [paper-2010](https://pubmed.ncbi.nlm.nih.gov/20847218) | [web](http://www.ruffus.org.uk) ]
- **[SciPipe](https://github.com/scipipe/scipipe)** - Workflow library embedded in the Go programming language, focusing on supporting complex workflow constructs, compiling to a single binary, providing powerful file naming and comprehensive audit reports for every output [ [paper-2019](https://pubmed.ncbi.nlm.nih.gov/31029061/) | [web](https://scipipe.org/) ]
- **[SeqWare](https://github.com/SeqWare/seqware)** - Hadoop Oozie-based workflow system focused on genomics data analysis in cloud environments. [ [paper-2010](https://pubmed.ncbi.nlm.nih.gov/21210981) | [web](https://seqware.github.io) ]
- **[Snakemake](https://bitbucket.org/snakemake)** - A workflow management system in Python that aims to reduce the complexity of creating workflows by providing a fast and comfortable execution environment. [ [paper-2018](https://pubmed.ncbi.nlm.nih.gov/29788404) | [web](https://snakemake.readthedocs.io) ]
- **[Workflow Descriptor Language](https://github.com/broadinstitute/wdl)** - Workflow standard developed by the Broad. [ [web](https://software.broadinstitute.org/wdl) ]

<a id="pipelines"></a>
### パイプライン

- **[Awesome-Pipeline](https://github.com/pditommaso/awesome-pipeline)** - A list of pipeline resources.
- **[Bactopia](https://github.com/bactopia/bactopia/)** - A flexible pipeline, built with Nextflow, for the complete analysis of bacterial genomes. [ [web](https://bactopia.github.io/) ]
- **[Bacannot](https://github.com/fmalmeida/bacannot)** - A generic but comprehensive bacterial annotation pipeline, built with Nextflow, with nice graphical options for investigating results. [ [web](https://bacannot.readthedocs.io/en/latest/?badge=latest) ]
- **[bcbio-nextgen](https://github.com/chapmanb/bcbio-nextgen)** - Batteries included genomic analysis pipeline for variant and RNA-Seq analysis, structural variant calling, annotation, and prediction. [ [web](https://bcbio-nextgen.readthedocs.io) ]
- **[R-Peridot](https://github.com/pentalpha/r-peridot)** - Customizable pipeline for differential expression analysis with an intuitive GUI. [ [web](http://www.bioinformatics-brazil.org/r-peridot) ]
- **[ngs-preprocess](https://github.com/fmalmeida/ngs-preprocess)** - A pipeline for preprocessing short and long sequencing reads, built with Nextflow. [ [web](https://ngs-preprocess.readthedocs.io/en/latest/?badge=latest) ]

<a id="sequence-processing"></a>
### 配列処理

シーケンス処理には、原始読み取りデータのデマルチプレックスや低品質塩基のトリミングなどのタスクが含まれます。

- **[AfterQC](https://github.com/OpenGene/AfterQC)** - Automatic Filtering, Trimming, Error Removing and Quality Control for fastq data. [ [paper-2017](https://pubmed.ncbi.nlm.nih.gov/28361673) ]
- **[FastQC](https://github.com/s-andrews/FastQC)** - A quality control tool for high throughput sequence data. [ [web](http://www.bioinformatics.babraham.ac.uk/projects/fastqc) ]
- **[Fastqp](https://github.com/mdshw5/fastqp)** - FASTQ and SAM quality control using Python.
- **[Fastx Tookit](https://github.com/agordon/fastx_toolkit)** - FASTQ/A short-reads pre-processing tools: Demultiplexing, trimming, clipping, quality filtering, and masking utilities. [ [web](http://hannonlab.cshl.edu/fastx_toolkit) ]
- **[MultiQC](https://github.com/ewels/MultiQC)** - Aggregate results from bioinformatics analyses across many samples into a single report. [ [paper-2016](https://pubmed.ncbi.nlm.nih.gov/27312411) | [web](http://multiqc.info) ]
- **[SeqFu](https://github.com/telatin/seqfu2)** - Sequence manipulation toolkit for FASTA/FASTQ files written in Nim. [ [paper-2021](https://www.mdpi.com/2306-5354/8/5/59) | [web](https://telatin.github.io/seqfu2/) ]
- **[SeqKit](https://github.com/shenwei356/seqkit)** - A cross-platform and ultrafast toolkit for FASTA/Q file manipulation in Golang. [ [paper-2016](https://pubmed.ncbi.nlm.nih.gov/27706213) | [web](https://bioinf.shenwei.me/seqkit) ]
- **[seqmagick](https://github.com/fhcrc/seqmagick)** - file format conversion in Biopython in a convenient way. [ [web](http://seqmagick.readthedocs.io) ]
- **[Seqtk](https://github.com/lh3/seqtk)** - Toolkit for processing sequences in FASTA/Q formats.
- **[smof](https://github.com/incertae-sedis/smof)** - UNIX-style FASTA manipulation tools.

<a id="data-analysis"></a>
### データ解析

以下の項目は、専門的なデータベースを導入することで、スケーラブルなゲノム解析を可能にします。

- **[Hail](https://github.com/hail-is/hail)** - Scalable genomic analysis.
- **[GLNexus](https://github.com/dnanexus-rnd/GLnexus)** - Scalable gVCF merging and joint variant calling for population sequencing projects. [ [paper-2018](https://www.biorxiv.org/content/10.1101/343970v1.abstract) ]

<a id="sequence-alignment"></a>
### 配列アラインメント

#### Pairwise

- **[Bowtie 2](https://github.com/BenLangmead/bowtie2)** - An ultrafast and memory-efficient tool for aligning sequencing reads to long reference sequences. [ [paper-2012](https://pubmed.ncbi.nlm.nih.gov/22388286) | [web](http://bowtie-bio.sourceforge.net/bowtie2) ]
- **[BWA](https://github.com/lh3/bwa)** - Burrow-Wheeler Aligner for pairwise alignment between DNA sequences.
- **[BWA-FastAlign](https://github.com/zzhofict/BWA-FastAlign)** - BWA-MEM drop-in replacement: 2-3x faster, 2-5x cheaper, 100% identical output on standard CPUs. [ [paper-2026](https://dl.acm.org/doi/10.1145/3774934.3786421) ]
- **[WFA](https://github.com/smarco/WFA)** - the wavefront alignment algorithm (WFA) which expoit sequence similarity to speed up alignment [ [paper-2020](https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btaa777/5904262) ]
- **[Parasail](https://github.com/jeffdaily/parasail)** - SIMD C library for global, semi-global, and local pairwise sequence alignments [ [paper-2016](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-016-0930-z) ]
- **[MUMmer](https://github.com/mummer4/mummer)** -  A system for rapidly aligning entire genomes, whether in complete or draft form. [ [paper-1999](http://mummer.sourceforge.net/MUMmer.pdf) | [paper-2002](http://mummer.sourceforge.net/MUMmer2.pdf) | [paper-2004](http://mummer.sourceforge.net/MUMmer3.pdf) | [web](http://mummer.sourceforge.net) ]
- **[DIAMOND](https://github.com/bbuchfink/diamond)** - An ultrafast protein aligner for `blastp` and `blastx` like searches. [ [paper-2021](https://www.nature.com/articles/s41592-021-01101-x) ]

#### Multiple Sequence Alignment

- **[POA](https://github.com/ljdursi/poapy)** - Partial-Order Alignment for fast alignment and consensus of multiple homologous sequences. [ [paper-2002](https://academic.oup.com/bioinformatics/article/18/3/452/236691) ]

#### Clustering

- **[MMseqs2](https://github.com/soedinglab/MMseqs2)** - Ultra-fast, sensitive search and clustering suite for protein and nucleotide sequence sets. [ [paper-2017](https://www.nature.com/articles/nbt.3988) | [paper-2018](https://www.nature.com/articles/s41467-018-04964-5) ]

<a id="quantification"></a>
### 定量

- **[Cufflinks](https://github.com/cole-trapnell-lab/cufflinks)** - Cufflinks assembles transcripts, estimates their abundances, and tests for differential expression and regulation in RNA-Seq samples. [ [paper-2010](https://www.nature.com/articles/nbt.1621) ]
- **[RSEM](https://github.com/deweylab/RSEM)** - A software package for estimating gene and isoform expression levels from RNA-Seq data. [ [paper-2011](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-323) | [web](http://deweylab.github.io/RSEM/) ]

<a id="variant-calling"></a>
### バリアントコール

- **[DeepVariant](https://github.com/google/deepvariant)** - Deep learning-based variant caller [ [paper-2018](https://rdcu.be/7Dhl) ]
- **[freebayes](https://github.com/ekg/freebayes)** - Bayesian haplotype-based polymorphism discovery and genotyping. [ [web](http://arxiv.org/abs/1207.3907) ]
- **[GATK](https://github.com/broadgsa/gatk)** - Variant Discovery in High-Throughput Sequencing Data. [ [web](https://software.broadinstitute.org/gatk) ]
- **[Octopus](https://github.com/luntergroup/octopus)** - A polymorphic bayesian genotyping model with wide applicability. [ [paper-2021](https://www.nature.com/articles/s41587-021-00861-3) ]
- **[bcftools](https://github.com/samtools/bcftools)** - samtools/bcftools are a suite of tools for manipulating NGS data and can be used to call variants. [ [paper-2009](https://pubmed.ncbi.nlm.nih.gov/19505943) | [web](http://htslib.org) ]
#### Structural variant callers

- **[Delly](https://github.com/dellytools/delly)** - Structural variant discovery by integrated paired-end and split-read analysis. [ [paper-2012](https://pubmed.ncbi.nlm.nih.gov/22962449) ]
- **[lumpy](https://github.com/arq5x/lumpy-sv)** - lumpy: a general probabilistic framework for structural variant discovery. [ [paper-2014](https://link.springer.com/article/10.1186/gb-2014-15-6-r84) ]
- **[manta](https://github.com/Illumina/manta)** - Structural variant and indel caller for mapped sequencing data. [ [paper-2015](https://pubmed.ncbi.nlm.nih.gov/26647377) ]
- **[gridss](https://github.com/PapenfussLab/gridss)** - GRIDSS: the Genomic Rearrangement IDentification Software Suite. [ [paper-2017](https://pubmed.ncbi.nlm.nih.gov/29097403) ]
- **[smoove](https://github.com/brentp/smoove)** - structural variant calling and genotyping with existing tools, but,smoothly.

### BAM File Utilities

- **[Bamtools](https://github.com/pezmaster31/bamtools)** - Collection of tools for working with BAM files. [ [paper-2011](https://academic.oup.com/bioinformatics/article/27/12/1691/255399) ]
- **[bam toolbox](https://github.com/AndersenLab/bam-toolbox)** MtDNA:Nuclear Coverage; BAM Toolbox can output the ratio of MtDNA:nuclear coverage, a proxy for mitochondrial content.
- **[mergesam](https://github.com/DarwinAwardWinner/mergesam)** - Automate common SAM & BAM conversions.
- **[mosdepth](https://github.com/brentp/mosdepth)** - fast BAM/CRAM depth calculation for WGS, exome, or targeted sequencing. [ [paper-2017](https://pubmed.ncbi.nlm.nih.gov/29096012/) ]
- **[SAMstat](https://github.com/TimoLassmann/samstat)** - Displaying sequence statistics for next-generation sequencing. [ [paper-2010](https://academic.oup.com/bioinformatics/article/27/1/130/201972) | [web](http://samstat.sourceforge.net) ]
- **[Somalier](https://github.com/brentp/somalier)** - Fast sample-swap and relatedness checks on BAMs/CRAMs/VCFs/GVCFs. [ [paper-2020](https://pubmed.ncbi.nlm.nih.gov/32664994) ]
- **[Telseq](https://github.com/zd1/telseq)** - Telseq is a tool for estimating telomere length from whole genome sequence data. [ [paper-2014](https://academic.oup.com/nar/article/42/9/e75/1249448) ]

### VCF File Utilities

- **[bcftools](https://github.com/samtools/bcftools)** - Set of tools for manipulating VCF files. [ [paper-2016](https://pubmed.ncbi.nlm.nih.gov/26826718) | [paper-2017](https://pubmed.ncbi.nlm.nih.gov/28205675) | [web](http://samtools.github.io/bcftools) ]
- **[vcfanno](https://github.com/brentp/vcfanno)** - Annotate a VCF with other VCFs/BEDs/tabixed files. [ [paper-2016](https://pubmed.ncbi.nlm.nih.gov/27250555) ]
- **[vcflib](https://github.com/vcflib/vcflib)** - A C++ library for parsing and manipulating VCF files.
- **[vcftools](https://github.com/vcftools/vcftools)** - VCF manipulation and statistics (e.g. linkage disequilibrium, allele frequency, Fst). [ [paper-2011](https://pubmed.ncbi.nlm.nih.gov/21653522) ]

### GFF BED File Utilities

- **[AGAT](https://github.com/NBISweden/AGAT)** - Suite of tools to handle gene annotations in any GTF/GFF format. [ [web](https://agat.readthedocs.io/en/latest/?badge=latest) ]
- **[gffutils](https://github.com/daler/gffutils)** - GFF and GTF file manipulation and interconversion. [ [web](http://daler.github.io/gffutils) ]
- **[BEDOPS](https://bedops.readthedocs.io/en/latest/index.html)** - The fast, highly scalable and easily-parallelizable genome analysis toolkit. [ [paper-2012](https://academic.oup.com/bioinformatics/article/28/14/1919/218826) ]
- **[Bedtools2](https://github.com/arq5x/bedtools2)** - A Swiss Army knife for genome arithmetic. [ [paper-2010](https://pubmed.ncbi.nlm.nih.gov/20110278) | [paper-2014](https://pubmed.ncbi.nlm.nih.gov/25199790) | [web](https://bedtools.readthedocs.io) ]

### Variant Simulation

- **[Bam Surgeon](https://github.com/adamewing/bamsurgeon)** - Tools for adding mutations to existing `.bam` files, used for testing mutation callers. [ [web](https://popmodels.cancercontrol.cancer.gov/gsr/packages/bamsurgeon) ]
- **[wgsim](https://github.com/lh3/wgsim)** - **Comes with samtools!** - Reads simulator. [ [web](https://popmodels.cancercontrol.cancer.gov/gsr/packages/wgsim) ]

### Variant Prediction/Annotation

- **[SIFT](https://github.com/teamdfir/sift)** - Predicts whether an amino acid substitution affects protein function. [ [paper-2003](https://pubmed.ncbi.nlm.nih.gov/12824425) | [web](http://sift.jcvi.org) ]
- **[SnpEff](https://github.com/pcingola/SnpEff)** - Genetic variant annotation and effect prediction toolbox. [ [paper-2012](https://www.tandfonline.com/doi/full/10.4161/fly.19695) | [web](https://pcingola.github.io/SnpEff) ]
- **[Ensembl VEP](https://anaconda.org/bioconda/ensembl-vep)** - The VEP determines the effect of your variants (SNPs, insertions, deletions, CNVs or structural variants) on genes, transcripts, and protein sequence, as well as regulatory regions. [ [paper-2016](https://doi.org/10.1186/s13059-016-0974-4) | [web](http://www.ensembl.org/info/docs/tools/vep/index.html) ]
- **[ANNOVAR](https://annovar.openbioinformatics.org/en/latest/)** - An annotation tool for genetic variants, predicting effects on genes, transcripts, and regulatory elements, which allows for custom database integration. [ [paper-2010](https://doi.org/10.1093/nar/gkq603) | [web](https://annovar.openbioinformatics.org/en/latest/) ]


<a id="python-modules"></a>
### Pythonモジュール

#### Data

- **[cruzdb](https://github.com/brentp/cruzdb)** - Pythonic access to the UCSC Genome database. [ [paper-2013](https://academic.oup.com/bioinformatics/article/29/23/3003/248468) ]
- **[pyensembl](https://github.com/openvax/pyensembl)** - Pythonic Access to the Ensembl database. [ [web](https://pyensembl.readthedocs.io/en/latest/pyensembl.html) ]
- **[bioservices](https://github.com/cokelaer/bioservices)** - Access to Biological Web Services from Python. [ [paper-2013](https://academic.oup.com/bioinformatics/article/29/24/3241/194040) [web](http://bioservices.readthedocs.io) ]

#### Tools

- **[cyvcf](https://github.com/arq5x/cyvcf)** - A port of [pyVCF](https://github.com/jamescasbon/PyVCF) Cythonを使用して高速化しています。
- **[cyvcf2](https://github.com/brentp/cyvcf2)** - Cython + HTSlib == fast VCF parsing; even faster parsing than pyVCF. [ [paper-2017](https://pubmed.ncbi.nlm.nih.gov/28165109) | [web](https://brentp.github.io/cyvcf2) ]
- **[polars-bio](https://github.com/biodatageeks/polars-bio)** - Python library for blazing-fast genomic interval operations and genomic file formats I/O on Polars DataFrames [ [paper-2025](https://doi.org/10.1093/bioinformatics/btaf640) | [ [web](https://biodatageeks.org/polars-bio/) ] ]
- **[pyBedTools](https://github.com/daler/pybedtools)** - Python wrapper for [bedtools](https://github.com/arq5x/bedtools). [ [paper-2011](https://pubmed.ncbi.nlm.nih.gov/21949271) | [web](http://daler.github.io/pybedtools) ]
- **[pyfaidx](https://github.com/mdshw5/pyfaidx)** - Pythonic access to FASTA files.
- **[pysam](https://github.com/pysam-developers/pysam)** - Python wrapper for [samtools](https://github.com/samtools/samtools). [ [web](https://pysam.readthedocs.io/en/latest/api.html) ]
- **[pyVCF](https://github.com/jamescasbon/PyVCF)** - A VCF Parser for Python. [ [web](http://pyvcf.readthedocs.org/en/latest/index.html) ]
- **[Scanpy](https://github.com/scverse/scanpy)** - Scalable toolkit for analyzing single-cell gene expression data, including preprocessing, visualization, clustering, and trajectory inference. [ [paper-2018](https://doi.org/10.1186/s13059-017-1382-0) | [web](https://scanpy.readthedocs.io) ]

<a id="assembly"></a>
### アセンブリ
- **[SPAdes](https://github.com/ablab/spades)** - SPAdes (St. Petersburg genome assembler) is an assembly toolkit containing various assembly pipelines and the de-facto standard for prokaryotic genome assemblies.
- **[SKESA](https://github.com/ncbi/SKESA)** - SKESA is a de-novo sequence read assembler for microbial genomes. It uses conservative heuristics and is designed to create breaks at repeat regions in the genome. This leads to excellent sequence quality without significantly compromising contiguity.
- **[Minimap2](https://github.com/lh3/minimap2)** - Minimap2 is an pairwise aligner for genomic and spliced nucleotide sequences. It can perform the assembly-to-assembly alignment, and works with gzip'd FASTQ, FASTA formats. It also finds overlaps between long-reads.
- **[D-GENIES](https://dgenies.toulouse.inra.fr/)** - **D**ot plot large **Gen**omes in an **I**nteractive, **E**fficient and **S**imple way. It is an online tool designed to support large genome, compare two genomes, and you can interact with the dot plot to improve the visualisation. It can also be used for extension of minimap2 by uploading the output generated in PAF(Pairwise mApping Format) or MAF(Multiple Alignment File) alignment files to D-GENIES

<a id="annotation"></a>
### アノテーション
- **[Prokka](https://github.com/tseemann/prokka)** - Prokka: rapid prokaryotic genome annotation. Prokka is one of the most cited annotation command line tools for microbial genome annotations.
- **[Bakta](https://github.com/oschwengers/bakta)** - Bakta is a tool for the rapid & standardized annotation of bacterial genomes & plasmids. It provides dbxref-rich and sORF-including annotations in machine-readable JSON & bioinformatics standard file formats for automatic downstream analysis.

<a id="long-read-sequencing"></a>
## ロングリードシーケンシング

### Long-read Assembly

- **[canu](https://github.com/marbl/canu)** - A single molecule sequence assembler for genomes large and small.
- **[flye](https://github.com/fenderglass/Flye)** - De novo assembler for single molecule sequencing reads using repeat graphs.
- **[hifiasm](https://github.com/chhylp123/hifiasm)** - A haplotype-resolved assembler for accurate Hifi reads.
- **[wtdbg2](https://github.com/ruanjue/wtdbg2)** -  A fuzzy Bruijn graph approach to long noisy reads assembly

<a id="visualization"></a>
## 可視化

### Genome Browsers / Gene Diagrams

次のツールは、ゲノムデータの可視化や、DNA-Seq、RNA-Seq、ChIP-Seqなどのシーケンスデータ、変異データなどを含むゲノムデータのカスタマイズされた可視化の構築に使用できます。

- **[Squiggle](https://github.com/Lab41/squiggle)** - Easy-to-use DNA sequence visualization tool that turns FASTA files into browser-based visualizations. [ [paper-2018](https://pubmed.ncbi.nlm.nih.gov/30247632) | [web](https://squiggle.readthedocs.io/en/latest/) ]
- **[biodalliance](https://github.com/dasmoth/dalliance)** - Embeddable genome viewer. Integration data from a wide variety of sources, and can load data directly from popular genomics file formats including bigWig, BAM, and VCF.
  [ [paper-2011](https://pubmed.ncbi.nlm.nih.gov/21252075) | [web](http://www.biodalliance.org) ]
- **[BioJS](https://github.com/biojs/biojs)** - BioJS is a library of over hundred JavaScript components enabling you to visualize and process data using current web technologies. [ [paper-2014](https://pubmed.ncbi.nlm.nih.gov/25075290/) | [web](http://biojs.net/) ]
- **[Circleator](https://github.com/jonathancrabtree/Circleator)** - Flexible circular visualization of genome-associated data with BioPerl and SVG. [ [paper-2014](https://pubmed.ncbi.nlm.nih.gov/25075113) ]
- **[DNAism](https://github.com/drio/dnaism)** - Horizon chart D3-based JavaScript library for DNA data. [ [paper-2016](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-016-0891-2) | [web](http://drio.github.io/dnaism/) ]
- **[IGV js](https://github.com/igvteam/igv)** - Java-based browser. Fast, efficient, scalable visualization tool for genomics data and annotations. Handles a large variety of formats. [ [paper-2019](https://pubmed.ncbi.nlm.nih.gov/31099383) | [web](https://software.broadinstitute.org/software/igv) ]
- **[Island Plot](https://github.com/lairdm/islandplot)** - D3 JavaScript based genome viewer. Constructs SVGs. [ [paper-2015](https://pubmed.ncbi.nlm.nih.gov/25916842/) ]
- **[JBrowse](https://github.com/GMOD/jbrowse)** - JavaScript genome browser that is highly customizable via plugins and track customizations. [ [paper-2016](https://pubmed.ncbi.nlm.nih.gov/27072794) | [web](http://jbrowse.org/) ]
- **[PHAT](https://github.com/chgibb/PHAT)** - Point and click, cross platform suite for analysing and visualizing next-generation sequencing datasets. [ [paper-2018](https://pubmed.ncbi.nlm.nih.gov/30561651) | [web](https://chgibb.github.io/PHATDocs) ]
- **[pileup.js](https://github.com/hammerlab/pileup.js)** - JavaScript library that can be used to generate interactive and highly customizable web-based genome browsers. [ [paper-2016](https://pubmed.ncbi.nlm.nih.gov/27153605) ]
- **[scribl](https://github.com/chmille4/Scribl)** - JavaScript library for drawing canvas-based gene diagrams. [ [paper-2012](https://pubmed.ncbi.nlm.nih.gov/23172864) | [web](http://chmille4.github.io/Scribl) ]
- **Lucid Align** - A modern sequence alignment viewer. [ [web](https://lucidalign.com) ]

### Circos Related

- **[Circos](https://github.com/vigsterkr/circos)** - Perl package for circular plots, which are well suited for genomic rearrangements. [ [paper-2009](https://pubmed.ncbi.nlm.nih.gov/19541911) | [web](http://circos.ca) ]
- **ClicO FS** - An interactive web-based service of Circos. [ [paper-2015](https://pubmed.ncbi.nlm.nih.gov/26227146) ]
- **OmicCircos** - R package for circular plots for omics data. [ [paper-2014](https://pubmed.ncbi.nlm.nih.gov/24526832) | [web](http://www.bioconductor.org/packages/release/bioc/html/OmicCircos.html) ]
- **J-Circos** - A Java application for doing interactive work with circos plots. [ [paper-2014](https://pubmed.ncbi.nlm.nih.gov/25540184) | [web](http://www.australianprostatecentre.org/research/software/jcircos) ]
- **[rCircos](https://bitbucket.org/henryhzhang/rcircos/src/master/)** - R package for circular plots. [ [paper-2013](https://pubmed.ncbi.nlm.nih.gov/23937229) | [web](http://watson.nci.nih.gov/cran_mirror/web/packages/RCircos/index.html) ]
- **[fujiplot](https://github.com/mkanai/fujiplot)** - A circos representation of multiple GWAS results. [ [paper-2018](https://www.nature.com/articles/s41588-018-0047-6) ]

<a id="database-access"></a>
## データベースアクセス

- [Entrez Direct: E-utilities on the UNIX command line](http://www.ncbi.nlm.nih.gov/books/NBK179288/) - NCBIのデータベースにプログラムでアクセスするためのUNIXコマンドラインツール。インストール方法や例はリンクに記載されている。

<a id="resources"></a>
## リソース

### Becoming a Bioinformatician

- [What is a bioinformatician](http://blog.fejes.ca/?p=2418)
- [Bioinformatics Curriculum Guidelines: Toward a Definition of Core Competencies](http://www.ploscompbiol.org/article/info:doi%2F10.1371%2Fjournal.pcbi.1003496)
- [Top N Reasons To Do A Ph.D. or Post-Doc in Bioinformatics/Computational Biology](http://caseybergman.wordpress.com/2012/07/31/top-n-reasons-to-do-a-ph-d-or-post-doc-in-bioinformaticscomputational-biology/)
- [A 10-Step Guide to Party Conversation For Bioinformaticians](https://genomebiology.biomedcentral.com/articles/10.1186/gb-2013-14-1-104) - 「それでは、あなたは何をしていますか？」という質問に対して、フィールドに携わっていない人々に概念を伝えるためのステップバイステップガイド。
- [A History Of Bioinformatics (In The Year 2039)](https://www.youtube.com/watch?v=uwsjwMO-TEA) - C. Titus Brownが2039年に振り返ったバイオインフォマティクスの視点についての講演。この講演のノートは [here](http://ivory.idyll.org/blog/2014-bosc-keynote.html) にあります。
- [A farewell to bioinformatics](https://madhadron.com/science/farewell_to_bioinformatics.html) - バイオインフォマティクスの現状に対する批判的な見解。
- [A Series of Interviews with Notable Bioinformaticians](http://www.acgt.me/blog/2014/3/25/101-questions-a-new-series-of-interviews-with-notable-bioinformaticians) - ケイト・ブレッドナム博士は「単純な質問を、多くの有名なバイオインフォマティクス研究者に投げて、彼らが現在のバイオインフォマティクス研究に対する感想を評価し、自分のバイオインフォマティクスキャリアに役立ったことについてのヒントを得る」ことの価値があると考えた。
- [Open Source Society University on Bioinformatics](https://github.com/ossu/bioinformatics) - 世界のトップ大学の講義を無料で自宅で学べるバイオインフォマティクスコースの確実な道。
- [Rosalind](http://rosalind.info/) - ローザリンズは、問題解決を通じてバイオインフォマティクスを学ぶプラットフォーム。
- [A guide for the lonely bioinformatician](http://www.opiniomics.org/a-guide-for-the-lonely-bioinformatician/) - このガイドはバイオインフォマティクス専門家向けであり、彼らのキャリア開発をより良い方向へ導くことを目的としている。
- [A brief history of bioinformatics](https://doi.org/10.1093/bib/bby063)

### Bioinformatics on GitHub

- [Awesome-alternative-splicing](https://github.com/HussainAther/awesome-alternative-splicing) - 代替スプライシングに関するリソースのリスト。ソフトウェア、データベース、その他のツールを含む。
- [Awesome AI-based Protein Design](https://github.com/opendilab/awesome-AI-based-protein-design) - AIを用いたタンパク質設計に関する研究論文のコレクション。

### Sequencing

- [Next-Generation Sequencing Technologies - Elaine Mardis (2014)](https://youtu.be/6Is3W7JkFp8) [1:34:35] - 次世代および第三世代シーケンシング技術に関する優れた（技術的）概要、そしてがん研究におけるいくつかの応用例を含む。
- [Annotated bibliography of \*Seq assays](https://liorpachter.wordpress.com/seq/) - さまざまなシーケンシング技術および検出法（転写から移動遺伝子の発見まで）に関する約100の論文のリスト。
- [For all you seq... (PDF)](http://www.illumina.com/content/dam/illumina-marketing/documents/applications/ngs-library-prep/ForAllYouSeqMethods.pdf) (3456x5471) - Illuminaが作成した大規模な情報図。シーケンシング技術の仕組みを説明しており、技術はタンパク質間相互作用、RNA転写、RNA-タンパク質相互作用、RNAの低レベル検出、RNAの修飾、RNA構造、DNAの再配置およびマーカー、DNAの低レベル検出、エピジェネティクス、DNA-タンパク質相互作用を含む。参考文献も含まれている。

### RNA-Seq

- [Review papers on RNA-seq (Biostars)](https://www.biostars.org/p/52152/) - RNA-seqおよび分析手法に関する多くの基礎的な論文を含む。
- [Informatics for RNA-seq: A web resource for analysis on the cloud](https://github.com/griffithlab/rnaseq_tutorial) - Amazon AWSクラウドサービスを用いてクラウド上でRNA-seq分析を行う教育リソース。テーマにはデータの準備、前処理、差分表現、イソフォーム発見、データ可視化、解釈が含まれる。
- [RNA-seqlopedia](http://rnaseq.uoregon.edu/) - RNA-seqlopediaは、RNA-seqおよび成功を収めるRNA-seq実験に必要な選択肢について、非常に素晴らしい概観を提供しています。
- [A survey of best practices for RNA-seq data analysis](http://genomebiology.biomedcentral.com/articles/10.1186/s13059-016-0881-8) - RNA-seqの計算解析に関する素晴らしいルートマップを提供しており、課題や障壁、注意すべき点について述べつつ、RNA-seqデータを他のデータタイプと統合する方法についても説明しています。
- [Stories from the Supplement](https://www.youtube.com/watch?v=5NiFibnbE8o) [46:39] - ドクター・リオール・パッチェルは、有名なRNA-seq分析ソフトウェアCuffDiffおよび[Cufflinks](http://cole-trapnell-lab.github.io/cufflinks/)の補足資料から語った体験を共有し、その手法の一部を説明しています。
- [List of RNA-seq Bioinformatics Tools](https://en.wikipedia.org/wiki/List_of_RNA-Seq_bioinformatics_tools) - ウィキペディアに掲載された、RNA-seq解析に必要なバイオインフォマティクスツールの詳細リスト。品質管理、アライメント、スプライス解析、可視化など、解析パイプラインのすべての段階をカバーしています。
- [RNA-seq Analysis](https://github.com/crazyhottommy/RNA-seq-analysis) - [@crazyhottommy](https://github.com/crazyhottommy)がRNA-seq解析における各ステップおよび考慮事項について記したノート。

### ChIP-Seq

- [ChIP-seq analysis notes from Tommy Tang](https://github.com/crazyhottommy/ChIP-seq-analysis) - ChIP-seqデータに関するリソース。論文、手法、ソフトウェアへのリンク、分析に関する情報などを含みます。

### YouTube Channels and Playlists

- [Current Topics in Genome Analysis 2016](https://www.genome.gov/12514288/current-topics-in-genome-analysis-2016-course-syllabus-handouts-and-videos/) - NIHで行われた14講の講義シリーズ。遺伝子解析の現在のテーマについて、シーケンス解析、シーケンス技術、さらには遺伝子医療といった、より臨床的なテーマまでをカバーしています。
- [GenomeTV](https://www.youtube.com/user/GenomeTV) - "GenomeTVは、NHGRIが提供する公式なビデオリソースのコレクションで、講義、ニュースドキュメンタリー、遺伝子研究の研究、問題、臨床応用に関する全ビデオコレクションを含みます。"
- [Leading Strand](https://www.youtube.com/user/LeadingStrand) - コールズ・スプリング・ハーバー・ラボ（CSHL）の会議から発表されたキーノート講義。詳しくは[The Leading Strand](http://theleadingstrand.cshl.edu/)を参照。
- [Genomics, Big Data and Medicine Seminar Series](https://www.youtube.com/playlist?list=PLqLDR0CTP9_pboZCk6gR9Zn4kW7h9XWJI) - "私たちのセミナーは、GBM（グリオブラインマリオ）の重要な交差点に焦点を当て、将来を深く変える「最先端」技術とアプローチを掘り下げています。"
- [Rafael Irizarry's Channel](https://www.youtube.com/user/RafalabChannel/videos) - リファエル・イリザリー博士による遺伝子解析における統計に関する講義および学術講演。
- [NIH VideoCasting and Podcasting](https://www.youtube.com/user/nihvcast) - "NIH VideoCastは、インターネットを通じて世界中の視聴者にライブでセミナー、会議、会議を配信し、リアルタイムストリーミングビデオとして提供しています。" これは遺伝子解析およびバイオインフォマティクスに限定されたものではなく、バイオインフォマティクスおよび遺伝子解析の分野に特化した素晴らしい講演を多数提供しています。

### Blogs

- [ACGT](http://www.acgt.me/) - ケイト・ブレッドナム博士が書いた"生物学、遺伝子解析、そしてバイオインフォマティクスの誤用が人類に及ぼす持続的な脅威についての考え"。
- [Opiniomics](http://www.opiniomics.org/) - ミック・ウォータン博士が書いたバイオインフォマティクス、遺伝子、生物学に関する内容。
- [Bits of DNA](https://liorpachter.wordpress.com/) - リオール・パッチェル博士が計算生物学に関するレビューおよびコメントを執筆しています。
- [it is NOT junk](http://www.michaeleisen.org/blog/) - マイケル・アイゼン博士が執筆した"遺伝子、DNA、進化、オープンサイエンス、野球、その他重要なテーマに関するブログ"。
- [#!/perl/bioinfo](https://bioinfoperl.blogspot.com) - EEAD-CSICの計算および構造生物学グループは、植物遺伝子解析、計算および構造生物学の問題について、スペイン語および英語でアイデアとコードを発信しています。

### Miscellaneous

- [The Leek group guide to genomics papers](https://github.com/jtleek/genomicspapers/) - 遺伝子解析、RNA-seq、統計（遺伝子解析で使用される）、ソフトウェア開発など、遺伝子解析分野の最新情報を得るために、専門的にキュレーションされた論文のリスト。
- [A New Online Computational Biology Curriculum](https://doi.org/10.1371/journal.pcbi.1003662) - "この記事は、バイオインフォマティクスおよび計算生物学の知識拡張に興味がある人々にとって関連性の高い数百の無料ビデオ講座のカタログを紹介しています。講座は大学の部門にモデルされた11の分野に分類され、コメントおよびキャリアアドバイスとともに提供されています。"
- [How Perl Saved the Human Genome Project](http://www.foo.be/docs/tpj/issues/vol1_2/tpj0102-0001.html) - リンカーン・D・スティン博士が、ヒトゲノムプロジェクトにおけるPerlプログラミング言語の重要性について語ったエピソード。
- [Educational Papers from Nature Biotechnology and PLoS Computational Biology](https://liacs.leidenuniv.nl/~hoogeboomhj/mcb/nature_primer.html) - 計算生物学およびバイオインフォマティクスにおけるさまざまな手法についての、初心者向けのリンク一覧および短い教育記事の集まり
- [The PeerJ Bioinformatics Software Tools Collection](https://peerj.com/collections/45-bioinformatics-software/) - Keith CrandallおよびClaus Whiteがキュレーションしたツールのコレクション。PeerJに掲載されている最も興味深い、革新的で関連性の高いバイオインフォマティクスツールに関する記事を集約する目的を持つ。

<a id="online-networking-groups"></a>
## オンライン交流グループ

- [Bioinformatics (on Discord)](https://discord.com/invite/3uxbPns) - 一般のバイオインフォマティクスに関するDiscordサーバー
- [r-bioinformatics](https://www.reddit.com/r/bioinformatics/comments/7ndwm1/rbioinformatics_slack_channel_and_an_open_call/) - r/bioinformaticsの公式Slackワークスペース ([send a direct message to apfejes on reddit](https://www.reddit.com/message/compose/?to=apfejes&subject=Request%20to%20join%20the%20r/bioinformatics%20Slack%20group&message=I%20would%20like%20to%20request%20to%20join%20the%20r/bioinformatics%20Slack%20group))
- [BioinformaticsGRX](https://bioinformaticsgrx.es/) - スペインのグランダに拠点を置くバイオインフォマティクス研究者たちのコミュニティ
- [Comunidad de Desarolladores de Software en Bioinformática](https://comunidadbioinfo.github.io/) - ラテンアメリカを中心とするバイオインフォマティクス研究者たちのコミュニティ
- [COMBINE](https://combine.org.au/) - オーストラリアのバイオインフォマティクス学生向けのグループ

<a id="license"></a>
## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)
https://creativecommons.org/publicdomain/zero/1.0/
