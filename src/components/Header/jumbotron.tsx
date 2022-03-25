import React from "react";

export const Jumbotron = () => {
    return (
        <section className="jumbotron text-center mb-0 bg-white">
        <div className="container">
          <h1 className="jumbotron-heading">Album example</h1>
          <p className="lead text-muted">
          以下のコレクションについて短くて先導的なもの—その内容、
             作成者など 短くて甘くしますが、人々にとって短すぎないようにします
             単にそれを完全にスキップしないでください。
          </p>
          <p>
            <a href="#" className="btn btn-primary m-2">
            主な行動の呼びかけ
            </a>
            <a href="#" className="btn btn-secondary m-2">
            二次的行動
            </a>
          </p>
        </div>
      </section>
    )
}