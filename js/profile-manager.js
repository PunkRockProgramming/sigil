/**
 * MYSTICAL PATH TOOLS — PERSONAL PROFILE MANAGER
 * Stores name, birthdate, and tradition preference across tools.
 * localStorage key: 'mystical-path-profile'
 */

const PROFILE_KEY = 'mystical-path-profile';

function getProfile() {
    try {
        const stored = localStorage.getItem(PROFILE_KEY);
        return stored ? JSON.parse(stored) : { name: '', birthdate: '', tradition: '' };
    } catch {
        return { name: '', birthdate: '', tradition: '' };
    }
}

function saveProfile(data) {
    const profile = {
        name: (data.name || '').trim(),
        birthdate: data.birthdate || '',
        tradition: data.tradition || ''
    };
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    return profile;
}

// Alias for clarity
const loadProfile = getProfile;
