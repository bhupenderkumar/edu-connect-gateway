export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      attendance: {
        Row: {
          created_at: string | null
          date: string
          id: string
          marked_by: string | null
          status: string
          student_id: string | null
        }
        Insert: {
          created_at?: string | null
          date: string
          id?: string
          marked_by?: string | null
          status: string
          student_id?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          id?: string
          marked_by?: string | null
          status?: string
          student_id?: string | null
        }
        Relationships: []
      }
      classwork: {
        Row: {
          created_at: string | null
          created_by: string | null
          date: string
          description: string
          grade_id: number | null
          id: string
          images: string[] | null
          subject: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          date: string
          description: string
          grade_id?: number | null
          id?: string
          images?: string[] | null
          subject: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          date?: string
          description?: string
          grade_id?: number | null
          id?: string
          images?: string[] | null
          subject?: string
        }
        Relationships: [
          {
            foreignKeyName: "classwork_grade_id_fkey"
            columns: ["grade_id"]
            isOneToOne: false
            referencedRelation: "grades"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          created_at: string | null
          created_by: string | null
          date: string
          description: string | null
          id: string
          title: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          date: string
          description?: string | null
          id?: string
          title: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          date?: string
          description?: string | null
          id?: string
          title?: string
        }
        Relationships: []
      }
      feedback: {
        Row: {
          created_at: string | null
          date: string
          id: string
          message: string
          parent_feedback_id: string | null
          student_id: string | null
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          date: string
          id?: string
          message: string
          parent_feedback_id?: string | null
          student_id?: string | null
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          id?: string
          message?: string
          parent_feedback_id?: string | null
          student_id?: string | null
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feedback_parent_feedback_id_fkey"
            columns: ["parent_feedback_id"]
            isOneToOne: false
            referencedRelation: "feedback"
            referencedColumns: ["id"]
          },
        ]
      }
      fees: {
        Row: {
          amount: number
          created_at: string | null
          due_date: string
          id: string
          payment_date: string | null
          status: string
          student_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          due_date: string
          id?: string
          payment_date?: string | null
          status: string
          student_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          due_date?: string
          id?: string
          payment_date?: string | null
          status?: string
          student_id?: string | null
        }
        Relationships: []
      }
      grades: {
        Row: {
          display_name: string
          id: number
          name: string
        }
        Insert: {
          display_name: string
          id?: number
          name: string
        }
        Update: {
          display_name?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      homework: {
        Row: {
          assigned_date: string
          created_at: string | null
          created_by: string | null
          description: string
          due_date: string
          grade_id: number | null
          id: string
          images: string[] | null
          subject: string
        }
        Insert: {
          assigned_date: string
          created_at?: string | null
          created_by?: string | null
          description: string
          due_date: string
          grade_id?: number | null
          id?: string
          images?: string[] | null
          subject: string
        }
        Update: {
          assigned_date?: string
          created_at?: string | null
          created_by?: string | null
          description?: string
          due_date?: string
          grade_id?: number | null
          id?: string
          images?: string[] | null
          subject?: string
        }
        Relationships: [
          {
            foreignKeyName: "homework_grade_id_fkey"
            columns: ["grade_id"]
            isOneToOne: false
            referencedRelation: "grades"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string
          read: boolean | null
          title: string
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          read?: boolean | null
          title: string
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          read?: boolean | null
          title?: string
          type?: string
          user_id?: string | null
        }
        Relationships: []
      }
      student_grades: {
        Row: {
          created_at: string | null
          created_by: string | null
          date: string
          grade: string
          id: string
          student_id: string | null
          subject: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          date: string
          grade: string
          id?: string
          student_id?: string | null
          subject: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          date?: string
          grade?: string
          id?: string
          student_id?: string | null
          subject?: string
        }
        Relationships: []
      }
      teacher_feedback: {
        Row: {
          created_at: string | null
          date: string
          id: string
          message: string
          student_id: string | null
          subject: string
          teacher_id: string | null
        }
        Insert: {
          created_at?: string | null
          date: string
          id?: string
          message: string
          student_id?: string | null
          subject: string
          teacher_id?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          id?: string
          message?: string
          student_id?: string | null
          subject?: string
          teacher_id?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          full_name: string
          id: string
          phone_number: string | null
          profile_image_url: string | null
          role: string
        }
        Insert: {
          created_at?: string | null
          full_name: string
          id: string
          phone_number?: string | null
          profile_image_url?: string | null
          role: string
        }
        Update: {
          created_at?: string | null
          full_name?: string
          id?: string
          phone_number?: string | null
          profile_image_url?: string | null
          role?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      enable_rls_on_all_tables: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      uuid_generate_v1: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      uuid_generate_v1mc: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      uuid_generate_v3: {
        Args: {
          namespace: string
          name: string
        }
        Returns: string
      }
      uuid_generate_v4: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      uuid_generate_v5: {
        Args: {
          namespace: string
          name: string
        }
        Returns: string
      }
      uuid_nil: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      uuid_ns_dns: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      uuid_ns_oid: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      uuid_ns_url: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      uuid_ns_x500: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
