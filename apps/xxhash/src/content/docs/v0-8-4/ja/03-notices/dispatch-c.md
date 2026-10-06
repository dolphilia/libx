---
title: "dispatch-c — 原通知"
licenseSource: "xxhash-library"
documentContext: [{"kind":"source","html":"<p>原通知を変更せず保持しています。</p>"},{"kind":"source","html":"<p><a href=\"https://github.com/Cyan4973/xxHash/blob/c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0/xxh_x86dispatch.c\">固定版の原文</a></p>"},{"kind":"editorial","html":"<p>以下は内容理解のための非公式訳です。上記の英語の原通知を保持しており、この訳は原通知を置き換えるものではありません。</p>","context":{"anchor":"非公式の日本語訳","label":"非公式の日本語訳"}}]
---

# dispatch-c



```text
/*
 * xxHash - Extremely Fast Hash algorithm
 * Copyright (C) 2020-2021 Yann Collet
 *
 * BSD 2-Clause License (https://www.opensource.org/licenses/bsd-license.php)
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *    * Redistributions of source code must retain the above copyright
 *      notice, this list of conditions and the following disclaimer.
 *    * Redistributions in binary form must reproduce the above
 *      copyright notice, this list of conditions and the following disclaimer
 *      in the documentation and/or other materials provided with the
 *      distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * You can contact the author at:
 *   - xxHash homepage: https://www.xxhash.com
 *   - xxHash source repository: https://github.com/Cyan4973/xxHash
 */

```



## 非公式の日本語訳



xxHash — 非常に高速なハッシュアルゴリズム。著作権 (C) 2020–2021 Yann Collet。

BSD 2条項ライセンス。

変更の有無にかかわらず、ソース形式およびバイナリ形式での再配布と使用は、次の条件を満たす場合に許可されます。

- ソースコードの再配布では、上記の著作権表示、この条件一覧、および以下の免責事項を保持する必要があります。
- バイナリ形式での再配布では、配布物に付属する文書またはその他の資料に、上記の著作権表示、この条件一覧、および以下の免責事項を再掲する必要があります。

このソフトウェアは、著作権者および貢献者によって「現状のまま」提供されます。商品性および特定目的への適合性に関する黙示の保証を含め、明示または黙示の一切の保証を否認します。

著作権者または貢献者は、このソフトウェアの使用に起因する直接損害、間接損害、付随的損害、特別損害、懲罰的損害、または結果的損害について、一切責任を負いません。これには、代替の物品またはサービスの調達、使用機会・データ・利益の喪失、事業の中断が含まれますが、これらに限定されません。損害がどのように生じたか、また契約、厳格責任、不法行為（過失その他を含む）など、どの責任理論に基づくかを問わず、そのような損害の可能性を知らされていた場合も同様です。

著者への連絡先として、原通知にはxxHashホームページとxxHashソースリポジトリのURLが示されています。
