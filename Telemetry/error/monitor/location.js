'use strict'

// Retrieve plugin's location and build logs
const getLocationMetadata = function (location, envMetadata) {
  const buildLogs = getBuildLogs(envMetadata)

  if (buildLogs === undefined && location === undefined) {
    return
  }

  return { buildLogs, ...location }
}

// Retrieve the URL to the build logs
const getBuildLogs = function ({ SITE_NAME, DEPLOY_ID }) {
  if (SITE_NAME === undefined || DEPLOY_ID === undefined) {
    return
  }

  return `${NET_ORIGIN}/sites/${SITE_NAME}/deploys/${DEPLOY_ID}`
}

const NET_ORIGIN = 'https://app.net.com'

module.exports = { getLocationMetadata }
