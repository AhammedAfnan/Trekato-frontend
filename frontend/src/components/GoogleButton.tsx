import React from 'react';

const GoogleButton: React.FC = () => {
    return (
        <button className="w-full flex items-center justify-center py-2 border rounded-full mb-6">
            <img src="/images/Google__G__logo.svg" alt="Google logo" className='mr-2' />
            <span>Login with Google</span>
        </button>
    );
};

export default GoogleButton;