export interface ProjectModel {
    id: string;
    name: string;
    html_url: string;
    description: string;
    github_url: string;
    owner: {
        avatar_url: string;
    }
}