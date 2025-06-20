import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-body">
                    <h2 className="card-title mb-3">About NewsApp</h2>
                    <p className="card-text">
                        NewsApp is your one-stop destination for the latest news from around the world. Stay updated with breaking headlines, in-depth articles, and trending topics across various categories including politics, technology, sports, entertainment, and more.
                    </p>
                    <p className="card-text">
                        Our mission is to deliver accurate, unbiased, and timely news to keep you informed. Powered by modern web technologies and a user-friendly interface, NewsApp ensures you never miss an important story.
                    </p>
                    <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item">Real-time news updates</li>
                        <li className="list-group-item">Customizable categories</li>
                        <li className="list-group-item">Responsive and intuitive design</li>
                        <li className="list-group-item">Powered by trusted news sources</li>
                    </ul>
                    <p className="card-text">
                        Thank you for choosing NewsApp as your trusted news companion!
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
