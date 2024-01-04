import { AppContext } from '@/stores/context/app-state'
import React, { useContext } from 'react'
import { ColorRing } from 'react-loader-spinner'

type Props = {}

const LoadingSpinner = (props: Props) => {
  const { showLoading }: any = useContext(AppContext)
  return (
    <div className={`fixed  min-h-screen w-full justify-center items-center backdrop-blur-xl
    ${showLoading ? 'flex' : 'hidden'}
    `}>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#f24171', '#f24171', '#f24171', '#f24171', '#f24171']}
      />
    </div>
  )
}

export default LoadingSpinner