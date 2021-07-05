import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Post from '../../components/Forum/Post'
import StaticProfile from './StaticProfile'
import Grid from '@material-ui/core/Grid'
import styles from './Dashboard.module.css'

import ProfileSkeleton from '../../util/ProfileSkeleton'
import PostSkeleton from '../../util/PostSkeleton'

import { connect } from 'react-redux'
import { getUserData } from '../../redux/actions/dataActions'

class Dashboard extends Component {
  state = {
    profile: null,
    postIdParam: null,
  }

  componentDidMount() {
    const handle = this.props.match.params.handle
    const postId = this.props.match.params.postId

    if (postId) this.setState({ postIdParam: postId })

    this.props.getUserData(handle)
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          profile: res.data.user,
        })
      })
      .catch((err) => console.log(err))
  }

  render() {
    const { posts, loading } = this.props.data
    const { postIdParam } = this.state

    let postsMarkup = loading ? (
      <PostSkeleton />
    ) : posts === null ? (
      <p>No posts from this user</p>
    ) : !postIdParam ? (
      posts.map((post) => <Post key={post.postId} post={post} />)
    ) : (
      posts.map((post) => {
        if (post.postId !== postIdParam)
          return <Post key={post.postId} post={post} />
        else return <Post key={post.postId} post={post} openDialog />
      })
    )

    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <Grid container spacing={4}>
            <Grid item sm={8} xs={12}>
              {postsMarkup}
            </Grid>
            <Grid item sm={4} xs={12}>
              {this.state.profile === null ? (
                <ProfileSkeleton />
              ) : (
                <StaticProfile profile={this.state.profile} />
              )}
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  data: state.data,
})

export default connect(mapStateToProps, { getUserData })(Dashboard)
