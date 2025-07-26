"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { LocationEdit, Lock, Mail, Phone, User } from "lucide-react";


export default function Register() {
    const router = useRouter();
    const [message, setMessage] = useState('');
    const [selectedChannel, setSelectedChannel] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSelectChange = (selectedOptions) => {
      setSelectedChannel(selectedOptions);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        router.push('/dashboard'); // Redirect to dashboard after registration
    };

    return (
      <div className="">
        <div className="flex flex-col items-center justify-center flex-grow p-4 md:p-8 lg:p-12">
          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              {/* Header with wave design */}
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-24 sm:h-28 rounded-t-lg">
                  <div className="absolute -bottom-10 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                      <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 bg-white rounded-full shadow-md border-4 border-white -mt-8 sm:-mt-10 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-12 sm:w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Form content */}
              <form className="px-6 sm:px-8 pt-6 pb-8" onSubmit={handleSubmit}>
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 mt-4">Create Your Account</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <div className="mb-4">
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          name="name" 
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 sm:pl-10 p-2.5 sm:p-3" 
                          placeholder="John Smith"
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                        </div>
                        <input 
                          type="email" 
                          name="email" 
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 sm:pl-10 p-2.5 sm:p-3" 
                          placeholder="name@example.com"
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4 lg:mb-0">
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                        </div>
                        <input 
                          type="tel" 
                          name="phone" 
                          id="phone"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 sm:pl-10 p-2.5 sm:p-3" 
                          placeholder="(123) 456-7890"
                          required 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-4">
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                        </div>
                        <input 
                          type="password" 
                          name="password" 
                          id="password"
                          autoComplete="new-password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 sm:pl-10 p-2.5 sm:p-3" 
                          placeholder="••••••••"
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">Address</label>
                      <div className="relative">
                        <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                          <LocationEdit className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                        </div>
                        <textarea 
                          name="address" 
                          id="address"
                          rows="4"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 sm:pl-10 p-2.5 sm:p-3" 
                          placeholder="Your address"
                          required 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {message && 
                  <div className="mb-4 p-2.5 sm:p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs sm:text-sm rounded">
                    <p>{message}</p>
                  </div>
                }
                
                <div className="flex items-center justify-between mt-6 mb-4">
                  <div className="flex items-center">
                    <input 
                      id="terms" 
                      type="checkbox" 
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" 
                      required
                    />
                    <label htmlFor="terms" className="ml-2 text-xs sm:text-sm text-gray-700">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full sm:w-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md transition-all duration-300 flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating Account...
                      </>
                    ) : 'Create Account'}
                  </button>
                  
                  <div className="text-center w-full sm:w-auto">
                    <p className="text-xs sm:text-sm text-gray-600">
                      Already have an account? {" "}
                      <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}